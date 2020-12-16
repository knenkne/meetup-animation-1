import React from 'react'
import { shallow } from 'enzyme'

import { Eye } from '../eye'

describe('<Password /> =>', () => {
    describe('<Eye />', () => {

        it('Рендер глаза', () => {
            const instance = shallow(<Eye />)
            expect(instance.find('[data-unit="input:password:eye"]').length).toEqual(1)
        })

        it('handleOpen на закрытом глазе isOpenable', () => {
            const handleOpen = jest.fn()
            const instance = shallow(<Eye onOpen={handleOpen} isOpen />)
            instance.find('[data-unit="input:password:eye"]').simulate('mouseDown')
            expect(handleOpen).toHaveBeenCalled()
        })

        it('handleClose на отпускание мышки isOpen', () => {
            const handleOpen = jest.fn()
            const handleClose = jest.fn()

            const instance = shallow(<Eye onOpen={handleOpen} onClose={handleClose} isOpen />)
            const eye = instance.find('[data-unit="input:password:eye"]')
            eye.simulate('mouseLeave')
            expect(handleClose).toHaveBeenCalled()
        })

        it('handleClose на отпускание мышки', () => {
            const handleClose = jest.fn()
            const instance = shallow(<Eye onClose={handleClose} />)

            const eye = instance.find('[data-unit="input:password:eye"]')
            eye.simulate('mouseLeave')
            expect(handleClose).not.toHaveBeenCalled()
            eye.simulate('mouseDown')
            eye.simulate('mouseLeave')
            expect(handleClose).not.toHaveBeenCalled()
        })
        it('handleOpen на нажатие кнопок', () => {
            const handleOpen = jest.fn()
            const instance = shallow(<Eye onOpen={handleOpen} />)
            const eye = instance.find('[data-unit="input:password:eye"]')

            eye.simulate('keyDown', { key: 'Tab' })
            expect(handleOpen).not.toHaveBeenCalled()
            eye.simulate('keyDown', { key: 'Enter' })
            expect(handleOpen).toHaveBeenCalled()
        })

        it('handleClose на нажатие кнопок isOpen', () => {
            const handleClose = jest.fn()
            const instance = shallow(<Eye onClose={handleClose} isOpen />)
            const eye = instance.find('[data-unit="input:password:eye"]')

            eye.simulate('keyDown', { key: 'Enter' })
            expect(handleClose).not.toHaveBeenCalled()
            eye.simulate('keyUp', { key: 'Enter' })
            expect(handleClose).toHaveBeenCalled()
        })
    })
})
