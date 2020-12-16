import { Link } from '@sbol/lib.app'
import _ from 'lodash'

import { productCategories } from './enums'

const { catIis, catDy, pif } = productCategories

export const makeItemLink = (products) => products.map((item) => {
    const pifNavLink = Link.createUrl('investments.funds.details')
    const pifLink = Link.createUrl('link.investments.funds.details', { id: item.contractNumber })
    const tmaLink = Link.createUrl('link.contract.details.investments.tma', {
        code: item.productCode,
        id: item.id
    })

    if (item.productCategory === pif && pifNavLink && pifLink) {
        return { ...item, href: pifLink }
    } else if (_.includes([catIis, catDy], item.productCategory) && tmaLink) {
        return { ...item, href: tmaLink }
    }

    return item
})
