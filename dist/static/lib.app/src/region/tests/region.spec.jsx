import { mount } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import { Region } from '..'

jest.mock('@sbol/webpage.provider.bootstrap', () => ({
    getAllLauncher: () => ({
        version: '1.2.3'
    }),
    getInitOptions: () => {},
    getOptions: () => {}
}))

const externalRegion = () => ({
    mount: (element, { region }) => {
        ReactDOM.render(element, region)
    },
    unmount: ({ region }) => {
        ReactDOM.unmountComponentAtNode(region)
    },
    default: () => <div>foo.bar.baz</div>
})

const loaderText = 'Load...'
const loader = () => <div>{loaderText}</div>

// Эмуляция SystemJS
const systemCreatorMock = (resolveOutput) => {
    let callbackResolver = () => {}

    return {
        import: () =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(resolveOutput)
                    // Вызываем callbackResolver в следующей итерации, для того что бы додждаться выполнения setState
                    setTimeout(callbackResolver, 0)
                }, 0)
            }),
        resolve: (cb) => (callbackResolver = cb)
    }
}

describe('Region ::', () => {
    afterEach(() => (global.System = void 0))

    it('simple call', async () => {
        const r = externalRegion()
        const willUnmount = jest.spyOn(r, 'unmount')
        global.System = systemCreatorMock(r)
        const RegionSimple = mount(
            <Region name="foo" loader={loader} />
        )

        expect(RegionSimple.text()).toBe(loaderText)

        // https://github.com/airbnb/enzyme/issues/2073
        await act(async () => {
            await new Promise((resolve) => global.System.resolve(resolve))
            expect(RegionSimple.update().text()).toBe('foo.bar.baz')

            RegionSimple.unmount()
            expect(willUnmount).toHaveBeenCalled()
        })
    })

    // Если регион размонтирован, то вызываться mount и unmount загруженного модуля не должен
    it('surprise unmount', async () => {
        const r = externalRegion()
        const willMount = jest.spyOn(r, 'mount')
        const willUnmount = jest.spyOn(r, 'unmount')
        global.System = systemCreatorMock(r)

        const RegionUmount = mount(
            <Region name="foo" loader={loader} />
        )

        // Surprise!!!!
        RegionUmount.unmount()

        // Так как регион не успел загрузится mount и unmount не вызывается
        expect(willUnmount).not.toHaveBeenCalled()
        expect(willMount).not.toHaveBeenCalled()

        await act(async () => {
            await new Promise((resolve) => global.System.resolve(resolve))
            // И даже после загрузки региона mount и unmount не вызывается
            expect(willUnmount).not.toHaveBeenCalled()
            expect(willMount).not.toHaveBeenCalled()
        })
    })
})
