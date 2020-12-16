import regionHeaderRu from '../../../region-header/locales/ru.json'
import regionProductRu from '../../../region-product/locales/ru.json'
import regionFooterRu from '../../../region-footer/locales/ru.json'

const ruValues = {
    ...regionHeaderRu,
    ...regionProductRu,
    ...regionFooterRu
}

module.exports = {
    init: (args) => args,
    t: (key) => ruValues[key],
    loadNamespaces: (key) => key
}
