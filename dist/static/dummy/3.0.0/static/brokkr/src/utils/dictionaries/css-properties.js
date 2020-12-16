/* eslint-disable quote-props, comment: консистентный вид, независимо от ключей */
// TODO: webpack-config?
// const colors = require('@sbol/lib.ui/src/utils/styles/colors.config.css').default

const colors = {
    black: 'rgba(33,33,33,1)',
    black65A: 'rgba(33,33,33,0.65)',
    green: '#278433',
    red: '#CB1906',
    darkBlue: '#4C6470',
    white: '#ffffff',
    yellow: '#ffce45'
}

const cssProperties = {
    'цвет фона': {
        name: 'background',
        availableValues: {
            // TODO: палитра из lib.ui
        }
    },
    'размер шрифта': {
        name: 'font-size',
        availableValues: {
            'маленький': '14px',
            'средний': '16px',
            'большой': '22px',
            'очень большой': '32px'
        }
    },
    'цвет шрифта': {
        name: 'color',
        availableValues: {
            'черный': colors.black,
            'альтренативный черный': colors.black65A,
            'зеленый': colors.green,
            'красный': colors.red,
            'темно-синий': colors.darkBlue,
            'белый': colors.white,
        }
    },
    'цвет рамки': {
        name: 'border-color',
        availableValues: {
            'красный': colors.red,
            'желтый': colors.yellow,
        }
    }
}

module.exports = cssProperties
