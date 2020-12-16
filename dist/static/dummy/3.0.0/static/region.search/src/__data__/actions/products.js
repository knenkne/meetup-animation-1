import { CLIENT_PRODUCTS_UPDATE } from '../action-types'

export const clientProductsUpdate = (products) => ({
    type: CLIENT_PRODUCTS_UPDATE,
    products
})
