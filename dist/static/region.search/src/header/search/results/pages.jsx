import React, { useMemo, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import i18next from 'i18next'

import {
    getFilteredPages,
    simpleIsLoadingPagesSelector
} from 'Selectors'

import { Loader } from '../components/loader'
import { ITEMS_MAX_COUNT } from '../constants'
import { showAdditionalFunctions } from '../../../__data__/thunks/analytic/showAdditionalFunctions'
import { hideAdditionalFunctions } from '../../../__data__/thunks/analytic/hideAdditionalFunctions'

import { PagesList } from './pages/pages-list'
import styles from './styles.css'
import { ShowMoreButton } from './show-more-button'
import { smoothScroll } from './utils/smooth-scroll'

export const Pages = ({
    filteredPages,
    isLoading,
    showMoreFunctionsMetric,
    hideFunctionsMetric,
    onMarkupChange
}) => {
    const pagesResults = useRef(null)
    const isItems = useMemo(() => filteredPages.length > 0, [filteredPages])

    // Показывать ли кнопку Показать еще
    const isShowMore = useMemo(() => filteredPages.length > ITEMS_MAX_COUNT, [filteredPages.length])

    // Список элементов свернут или открыт
    const [showMoreExpanded, setShowMoreExpanded] = useState(false)

    function changeShowMore () {
        setShowMoreExpanded(!showMoreExpanded)
        if (showMoreExpanded) {
            // Абсолютное значение вертикальной координаты верхнего края блока Функции
            const pagesTopValue = pagesResults.current.getBoundingClientRect().top + pageYOffset
            smoothScroll(pagesTopValue)

            hideFunctionsMetric()
        } else {
            showMoreFunctionsMetric(filteredPages.length - ITEMS_MAX_COUNT)
        }
    }

    // При обновлении списка показываем в свернутом виде
    useEffect(() => {
        setShowMoreExpanded(false)
        onMarkupChange()
    }, [filteredPages])

    return (
        <React.Fragment>
            {(isLoading || isItems) && <div className={styles.resultsBlock} ref={pagesResults}>
                <h3 className={styles.header}>
                    <span className={styles.resultsBlockTitle}>
                        {i18next.t('functions')}
                    </span>
                    {isLoading && <Loader mode="tiny" />}
                </h3>

                {isItems && <PagesList pages={showMoreExpanded ? filteredPages : filteredPages.slice(0, ITEMS_MAX_COUNT)} />}
                {isShowMore && <ShowMoreButton length={filteredPages.length} showMoreExpanded={showMoreExpanded} onClick={changeShowMore} categoryName="functions" />}

            </div>}
        </React.Fragment>
    )
}

Pages.propTypes = {
    filteredPages: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    showMoreFunctionsMetric: PropTypes.func.isRequired,
    hideFunctionsMetric: PropTypes.func.isRequired,
    onMarkupChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    filteredPages: getFilteredPages(state),
    isLoading: simpleIsLoadingPagesSelector(state)
})

const mapDispatchToProps = {
    showMoreFunctionsMetric: showAdditionalFunctions,
    hideFunctionsMetric: hideAdditionalFunctions
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages)
