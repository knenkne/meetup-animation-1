import { getBroker } from '@sbol/lib.app'

import { MOBILE_OPEN } from '../../__data__/event-types'
import { detectSafari } from '../../utils/detect-browser'

import { forceRepaint } from './force-repaint'
import { isCollapsedViewport } from './is-viewport'

const OPENED_PRODUCT_REGION = 'opened-product-region'
const SCROLL_MENU = 'scroll-menu'

/* Toggle left product region */
export const toggleProductRegion = () => {
    if (isCollapsedViewport()) {
        if (document.body.classList.toggle(OPENED_PRODUCT_REGION)) {
            /* eslint-disable-next-line no-unused-expressions, comment: необходимо обновить правила, учитывать optional chaining */
            document.getElementById(SCROLL_MENU)?.scroll(0, 0)
        }

        if (detectSafari() && !document.body.classList.contains(OPENED_PRODUCT_REGION)) {
            forceRepaint()
        }
    }
}

getBroker().on(MOBILE_OPEN, toggleProductRegion)
