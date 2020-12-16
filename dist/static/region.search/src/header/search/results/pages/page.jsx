import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from '@sbol/lib.app'
import { Link as UiLink, Icon } from '@sbol/lib.ui'

import { setProductsToShow } from 'Actions'
import { onSearchQueryChange } from 'Thunks'
import { clickPage } from 'Thunks/analytic/clickPage'

import CloseSuggestsContext from '../close-suggests-context'
import ResultsHandlerContext from '../results-handler-context'
import { eribUrl, plUrl } from '../../../../utils'

import { getOperationIconName } from './utils'
import styles from './style.css'
import { DocumentTitle } from './page/documents/document-title'

export const PageComponent = ({
    item,
    handleSetProductsToShow,
    handleSearchQueryChange,
    handleSearchResultClick,
    handleCloseSearchResult,
    clickMetric
}) => {
    const { action: name, link, prodListType, id } = item
    const handleProductClick = useCallback((e) => {
        if (prodListType) {
            e.preventDefault()
            handleSetProductsToShow(item)
            handleSearchQueryChange(name)
        }

        handleCloseSearchResult()
        handleSearchResultClick(name)
        clickMetric(item)
    }, [id])
    const href = useMemo(() => {
        if (link.startsWith('http')) {
            return link
        }

        const BASE_URL = link.startsWith('/PhizIC') ? eribUrl : plUrl

        return `${BASE_URL}${link}`
    }, [link])
    const icon = useMemo(() => getOperationIconName(item), [item])

    return (
        <UiLink
            as={Link}
            external={link.startsWith('http')}
            theme={{ link: styles.statement }}
            onClick={handleProductClick}
            href={href}
        >
            <div className={styles.operation}>
                <span className={styles.iconWrapper}>
                    <Icon name={`icon:core/operations/${icon}`} size="self" />
                </span>
                <DocumentTitle title={name} />
            </div>
        </UiLink>
    )
}

PageComponent.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        action: PropTypes.string.isRequired,
        keyWords: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
    handleSetProductsToShow: PropTypes.func.isRequired,
    handleSearchQueryChange: PropTypes.func.isRequired,
    handleSearchResultClick: PropTypes.func.isRequired,
    handleCloseSearchResult: PropTypes.func.isRequired,
    clickMetric: PropTypes.func.isRequired
}

/**
 * Обертка для компонента "Страница (Функция)", передающая в него методы из контекста, упрощает тестирование компонента ChatComponent.
 * @param {Object} props - пропсы, переданные из родителя
 * @return {Context} - объект контекста
 */
const ContextWrapper = (props) => (
    <ResultsHandlerContext.Consumer>
        {(handleSearchResultClick) => (
            <CloseSuggestsContext.Consumer>
                {(onCloseSearchResult) => (
                    <PageComponent
                        {...props}
                        handleSearchResultClick={handleSearchResultClick}
                        handleCloseSearchResult={onCloseSearchResult}
                    />
                )}
            </CloseSuggestsContext.Consumer>
        )}
    </ResultsHandlerContext.Consumer>
)

const mapDispatchToProps = {
    handleSetProductsToShow: setProductsToShow,
    handleSearchQueryChange: onSearchQueryChange,
    clickMetric: clickPage
}

export const Page = connect(null, mapDispatchToProps)(ContextWrapper)
