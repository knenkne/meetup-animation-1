import React from 'react'
import renderer from 'react-test-renderer'

import { Stages } from '../stages'

describe('<Stages />', () => {
    it('Рендерит children', () => {
        const tree = renderer
            .create(
                <Stages translations={{ tooltip: 'Вы здесь' }}>
                    <li />
                </Stages>
            )
            .toJSON()

        expect(tree).toMatchSnapshot()
    })
})
