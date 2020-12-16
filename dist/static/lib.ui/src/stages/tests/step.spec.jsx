import React from 'react'
import renderer from 'react-test-renderer'

import { Step } from '../step'

describe('<Stages.Step />', () => {
    it('Рендерит заголовок', () => {
        const tree = renderer
            .create(<Step title="Заголовок"><span>{'Текст'}</span></Step>)
            .toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('Имеет класс tooltip если передан mode', () => {
        const tree = renderer
            .create(<Step title="Заголовок" mode="progress"><span>{'Текст'}</span></Step>)
            .toJSON()

        expect(tree).toMatchSnapshot()
    })
})
