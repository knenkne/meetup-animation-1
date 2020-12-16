import React, { useEffect, useRef, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

import {
    simpleScreenBlockOrder
} from 'Selectors'

import { USER_INPUT_DEBOUNCE_TIMEOUT } from '../constants'

import Pages from './pages'
import ResultsHandlerContext from './results-handler-context'
import CloseSuggestsContext from './close-suggests-context'
import { Products } from './products'
import { OperationsHistory } from './operations-history'
import Providers from './providers/providers'
import styles from './styles.css'
import { EmtpyResult } from './empty-result'
import { ProductsFromPages } from './products-from-pages'

export const store = {
    Pages,
    OperationsHistory,
    Providers,
    Products
}
const TOP_BORDER = 5 //TODO лучше получать из стилизации элемента или его родителя реальное значение отступа
const DOW_BORDER = -24 //TODO лучше получать из стилизации элемента или его родителя реальное значение отступа

/**
 * Отрисовать нужный компонент
 * @param {Boolean} isProductFromPages - продукты из функции
 * @param {String} blockOrder - порядок блоков в попапе
 * @param {Function} calculateBottom - вычислить нижнюю границу попапа
 * @return {*} - ReactComponent
 */
export const render = ({
    isProductFromPages,
    blockOrder,
    calculateBottom
}) => {
    if (isProductFromPages) {
        return <ProductsFromPages />
    }

    return (
        <React.Fragment>
            <EmtpyResult />
            {
                blockOrder.map((key) => {
                    const Component = store[key]

                    return <Component key={key} onMarkupChange={calculateBottom} />
                })
            }
        </React.Fragment>
    )
}

/**
 * Вычислить положение нижней границы попапа.
 * @param {HTMLElement} target - DOM узел за которым наблюдаем
 * @return {Boolean} - убрать или оставить padding-bottom: 24px
 */
export const isBottomHidden = (target) => {
    if (!target) {
        return null
    }

    const { bottom } = target.current.getBoundingClientRect()
    const diff = window.innerHeight - bottom

    return diff > DOW_BORDER && diff <= TOP_BORDER
}

export const changeBottomHidden = (target, currentValue, setBottomHidden) => {
    if (target.current) {
        const result = isBottomHidden(target)

        if (result !== currentValue) {
            setBottomHidden(result)
        }
    }
}

const debouncedChangeBottomHidden = _.debounce(changeBottomHidden, USER_INPUT_DEBOUNCE_TIMEOUT)

export const SearchResults = ({
    handleSearchResultClick,
    onCloseSearchResult,
    isProductFromPages,
    blockOrder
}) => {
    const resultsContainer = useRef(null)
    const [bottomHidden, setBottomHidden] = useState(false)
    const calculateBottom = useCallback(() => {
        debouncedChangeBottomHidden(resultsContainer, bottomHidden, setBottomHidden)
    }, [bottomHidden])

    return (
        <ResultsHandlerContext.Provider value={handleSearchResultClick}>
            <CloseSuggestsContext.Provider value={onCloseSearchResult}>
                <div className={classnames(styles.results, bottomHidden && styles.resultsBottomHidden)} ref={resultsContainer}>
                    {render({
                        isProductFromPages,
                        blockOrder,
                        calculateBottom
                    })}
                </div>
            </CloseSuggestsContext.Provider>
        </ResultsHandlerContext.Provider>
    )
}

SearchResults.propTypes = {
    handleSearchResultClick: PropTypes.func.isRequired,
    onCloseSearchResult: PropTypes.func.isRequired,
    isProductFromPages: PropTypes.bool.isRequired,
    blockOrder: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    blockOrder: simpleScreenBlockOrder(state)
})

export default connect(mapStateToProps)(SearchResults)
