import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'

import { Pages } from '../pages'
import { ShowMoreButton } from '../show-more-button'
import { PagesList } from '../pages/pages-list'
import { ITEMS_MAX_COUNT } from '../../constants'

describe('Тесты для HOOKS Pages', () => {
    it('Клик по кнопке Показать еще', () => {
        const props = {
            filteredPages: [1, 2, 3, 4, 5, 6, 7],
            isLoading: true,
            showMoreFunctionsMetric: _.identity,
            hideFunctionsMetric: _.identity,
            onMarkupChange: _.identity
        }

        const wrapper = shallow(<Pages {...props} />)
        const button = wrapper.find(ShowMoreButton)

        expect(button.props().showMoreExpanded).toBe(false)
        expect(wrapper.find(PagesList).props().pages.length).toBe(ITEMS_MAX_COUNT)

        button.simulate('click')

        expect(wrapper.find(ShowMoreButton).props().showMoreExpanded).toBe(true)
        expect(wrapper.find(PagesList).props().pages.length).toBe(props.filteredPages.length)
    })
})
