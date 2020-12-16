import { vatValidator } from './vat-validator'

export const getTooltipVatProps = ({ formatConfig, value, active, touched, error }) => {
    const TOO_SHORT_VAT = 2

    const validation = vatValidator(value, formatConfig)

    return {
        direction: 'topLeft',
        mode: 'error',
        forceOpened: (active && value.length > 0 && validation.error.code !== TOO_SHORT_VAT) || (active && touched),
        tooltip: error || validation.error.message
    }
}
