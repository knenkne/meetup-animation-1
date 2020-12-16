import { log } from '@sbol/lib.app'

import RegionProduct, { mount as mountRegionProduct } from './region-product'
import RegionHeader, { mount as mountRegionHeader } from './region-header'
import RegionFooter, { mount as mountRegionFooter } from './region-footer'


const productRegionElement = document.getElementById('product-region')
const productHeaderElement = document.getElementById('header-region')
const productFooterElement = document.getElementById('footer-region')


export const mount = (element) => {

    mountRegionProduct(element.RegionProduct(), { region: productRegionElement })
    mountRegionHeader(element.RegionHeader(), { region: productHeaderElement })
    mountRegionFooter(element.RegionFooter(), { region: productFooterElement })
}


export const unmount = () => log.info('No unmount!')

export default () => ({
    RegionProduct,
    RegionHeader,
    RegionFooter
})

