import React from 'react'
import { shallow } from 'enzyme'
import _ from 'lodash'

import { SearchComponent } from '..'

describe('Тесты для компонента SearchComponent', () => {
    const wrapper = shallow(<SearchComponent
        handleSearchQueryChange={_.identity}
        handlePrefetchOperations={_.identity}
        handleSearchQueryClear={_.identity}
        updateSearchQuerySuggestions={_.identity}
        addSuggestValue={_.identity}
        searchQuery="query"
        isSearchEmpty={false}
        isProductFromPages={false}
        isErib={false}
        onDidMount={_.identity}
        onWillMount={_.identity}
    />)

    it('Проверить, что условие открытия попапа проставлено, а не написано true && ... (попап закрыт)', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('Проверить, что условие открытия попапа проставлено, а не написано true && ... (попап открыт)', () => {
        wrapper.setState({ searchInputIsInFocus: true })
        expect(wrapper).toMatchSnapshot()
    })
})
