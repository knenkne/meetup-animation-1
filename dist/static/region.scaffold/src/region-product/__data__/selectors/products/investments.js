import { Link } from '@sbol/lib.app'

import { checkFeature } from '../../../../utils/check-feature'

export const investmentsList = () => ({
    type: 'investments',
    title: 'region.scaffold:investments',
    newProductUrl: checkFeature('NewInvestmentProduct', 'region.scaffold') &&
        Link.createUrl('link.investments.dashboard.from', { from: 'scaffold' }),
    initialOpen: false,
    displayIfEmpty: true
})
