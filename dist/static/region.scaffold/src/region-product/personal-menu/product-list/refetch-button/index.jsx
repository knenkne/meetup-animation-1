import React, { useCallback } from 'react'
import { PropTypes } from 'prop-types'

import { mulptipleFetch } from '../../../__data__/utils/mulptiple-fetch'
import { isStatusError } from '../../utils/helpers'
import { ContentRow, Name } from '../../partials'
import { ProductInfoStyled } from '../../single-product/single-product-info/single-product-info.styles'
import { ADDITIONAL, REFETCH_TEXT } from '../../../style-constants'

import { IconWithRotateStyled, ProductWrapperWithoutListStyled } from './refetch-button.styles'

/*
 * Button for refetch multiple promises
 * @param {Array} refetchArray - array of promises
 * @param {String} as - tag for element
 * @param {Function} callback - fn to execute after multiple fetch
 * @return Component
 * @constructor
 * TODO: вынести в отдельные компоненты всю верстку из Single Product, так как она нужна не только в продуктах
 * TODO: useCallback, default props
 */
export const RefetchButton = ({ refetchArray, refetchStatuses, refetchMessage, callback }) => {

    const {
        title = 'refetch.default.title',
        description = 'refetch.default.description'
    } = refetchMessage

    const handleClick = useCallback(() => {

        const promisesWithError = refetchArray.filter((action, i) => isStatusError(refetchStatuses[i]))

        mulptipleFetch(promisesWithError)
            .then((data) => callback(data))
    }, [])

    return (
        <ProductWrapperWithoutListStyled
            as="button"
            onClick={handleClick}
        >
            <IconWithRotateStyled
                name="icon:products/common/ic36CounterClockwise"
                type="mono"
            />
            <ProductInfoStyled>
                <ContentRow>
                    <Name textStyle={REFETCH_TEXT} content={title} isStaticName />
                </ContentRow>
                <ContentRow messageStyle={ADDITIONAL}>
                    {description && (
                        <Name textStyle={REFETCH_TEXT} content={description} isStaticName />
                    )}
                </ContentRow>
            </ProductInfoStyled>
        </ProductWrapperWithoutListStyled>
    )
}

RefetchButton.defaultProps = {
    refetchStatuses: [],
    refetchArray: [],
    callback: () => {},
    refetchMessage: {}
}

RefetchButton.propTypes = {
    refetchStatuses: PropTypes.array,
    refetchArray: PropTypes.array,
    refetchMessage: PropTypes.object,
    callback: PropTypes.func
}
