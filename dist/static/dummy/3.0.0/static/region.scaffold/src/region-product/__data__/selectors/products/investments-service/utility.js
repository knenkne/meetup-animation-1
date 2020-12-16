import { Link } from '@sbol/lib.app'

import { getInvestmentIcon } from '../../../utils/get-investments-icon'
import { GHOST_COLOR } from '../../../../style-constants'

export const getMatchesInArray = (array, sample) => array.filter(({ productCode: a }) => sample.some(({ productCode: b }) => a === b))

export const getMatchesInArrayReverse = (array, sample) => array.filter(({ productCode: a }) => !sample.some(({ productCode: b }) => a === b))

export const findProduct = (array, productCategory) => array.filter((item) => item.productCategory === productCategory)

export const createObjectIisDu = (array) => array.map((item) => ({
    ...item,
    href: Link.createUrl('link.investments.tma', { code: item.productCode }),
    id: item.productCode,
    message: { text: item.amount },
    type: 'ghost',
    ...getInvestmentIcon({ productCategory: '' }, GHOST_COLOR),
}))
