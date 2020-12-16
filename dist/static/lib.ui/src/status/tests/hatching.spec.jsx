import React from 'react'
import { shallow } from 'enzyme'

import { Status } from '..'
import style from '../style.css'

describe('<Status.Hatching />', () => {
    it('is available', () => {
        expect(Status.Hatching).toBeDefined()
    })

    it('has class corresponding to status prop', () => {
        const wrapperDraft = shallow(
            <Status.Hatching
                mode="draft"
            />
        )
        const wrapperWaiting = shallow(
            <Status.Hatching
                mode="waiting"
            />
        )
        const wrapperDone = shallow(
            <Status.Hatching
                mode="done"
            />
        )
        const wrapperError = shallow(
            <Status.Hatching
                mode="error"
            />
        )

        expect(wrapperDraft.find('[data-unit="hatching:draft"]').hasClass(style.draft)).toBeTruthy()
        expect(wrapperWaiting.find('[data-unit="hatching:waiting"]').hasClass(style.waiting)).toBeTruthy()
        expect(wrapperDone.find('[data-unit="hatching:done"]').hasClass(style.done)).toBeTruthy()
        expect(wrapperError.find('[data-unit="hatching:error"]').hasClass(style.error)).toBeTruthy()
    })
})
