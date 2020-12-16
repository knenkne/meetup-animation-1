import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import style from './style.css'

const IconSetItem = ({ children, name }) => {
    const title = name || children.props.name

    const kebabValue = _.kebabCase(_.last(title.split('/')))
    const camelValue = _.camelCase(_.last(title.split('/')))

    return (
        <div className={style.iconBlock}>
            {children}
            <br />
            <span className={style.iconBlockLabel}>{kebabValue}</span>
            <br />
            {camelValue !== kebabValue &&
            <span className={style.iconBlockLabel}>{camelValue}</span>
            }
        </div>
    )
}

IconSetItem.propTypes = {
    children: PropTypes.element.isRequired
}

const getIconKeySet = ({ default: defaultExport = {}, ...namedExport } = {}) => Object.keys({
    ...namedExport,
    ...defaultExport
}).sort()

const getIconSet = ({ default: defaultExport = {}, ...namedExport } = {}) => ({
    ...namedExport,
    ...defaultExport
})

export const IconSet = ({ exports, children, exportsSvg }) => {
    if (exportsSvg) {
        const icons = getIconSet(require(`src/icon/${exportsSvg}`))

        return _.map(getIconKeySet(require(`src/icon/${exportsSvg}`)), (value) =>
            (<IconSetItem key={value} name={value}>
                {children(icons[value])}
            </IconSetItem>)
        )
    }

    return (
        <div className={style.iconBlockWrapper}>
            {_.map(getIconKeySet(require(`src/icon/${exports}`)), (value) => (
                <IconSetItem key={value}>
                    {children(value)}
                </IconSetItem>
            ))}
        </div>
    )
}

IconSet.propTypes = {
    exports: PropTypes.object,
    children: PropTypes.func.isRequired
}
