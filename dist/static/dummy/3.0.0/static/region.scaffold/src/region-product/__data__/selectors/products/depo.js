import _ from 'lodash'
import { createSelector } from 'reselect'

import { makeArray } from '../utils'
import { urlDepoDetail, urlOpenNewDepo } from '../../links'
import { isStatusLoading } from '../../../personal-menu/utils/helpers'
import { DEPO_COLOR } from '../../../style-constants'


const rootProductsSelector = (state) => state.products

export const depoAccountsStatus = createSelector(
    rootProductsSelector,
    (products) => _.get(products, 'depoaccounts.status', _.get(products, 'depoAccounts.status'))
)

const depoSelector = createSelector(
    rootProductsSelector,
    (products) =>
        makeArray(
            _.get(
                products,
                'depoaccounts.depoaccount',
                _.get(products, 'depoAccounts.depoAccount')
            )
        )
)
/**
 * map fn
 * @param {Array} depo - list accounts
 * @return {{icon: *, id: *, info: *[]}} - shape for product component
 */
const mapperForDepo = ({ id, name = '', number }) => ({
    id: parseInt(id, 10),
    name,
    icon: 'icon:products/common/ic36Document',
    colorScheme: DEPO_COLOR,
    href: urlDepoDetail(id),
    message: {
        text: number
    }
})

const ghostDepo = {
    id: 'ghostDepo',
    name: 'region.scaffold:depo.ghost.title',
    icon: 'icon:products/common/ic36Document',
    colorScheme: DEPO_COLOR,
    type: 'ghost'
}

export const mappedDepo = createSelector(
    depoSelector,
    (depo) => depo.map(mapperForDepo)
)

export const depoList = createSelector(
    mappedDepo,
    depoAccountsStatus,
    (depo, depoAccountsStatusValue) => ({
        title: 'region.scaffold:depo',
        content: !isStatusLoading(depoAccountsStatusValue) && depo.length === 0 ? [ghostDepo] : depo,
        initialContent: depo,
        type: 'depo',
        initialOpen: false,
        newProductUrl: urlOpenNewDepo,
        feature: 'AccessDepoAccTab',
        refetchMessage: {
            title: 'refetch.button.name',
            icon: ''
        }
    })
)
