import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import cs from 'classnames'

import defaultTheme from './style.css'

const SLASH = '/'
const iconOmit = ['name', 'theme', 'mode', 'size']

/* eslint-disable valid-jsdoc, comment: некорректный парсинг jsdoc */
/**
 * [Zeplin](https://app.zeplin.io/project/59312e1ebdf1da6fc8d37ffb/dashboard?q=elements%20icons)
 * Компонент для вывода svg-иконок
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export class Icon extends React.PureComponent {
    static addIcons = (namespace, promise) => {
        if (Icon.namespaces[namespace]) {
            return
        }

        if (typeof promise === 'function') {
            Icon.namespaces[namespace] = () => promise()
                .then(({ default: defaultExport = {}, ...namedExport } = {}) => {
                    const icons = { ...namedExport, ...defaultExport }

                    Icon.namespaces[namespace] = _.mapKeys(icons, (value, key) => _.camelCase(key))

                    return icons
                })
        } else {
            Icon.namespaces[namespace] = _.mapKeys(promise, (value, key) => _.camelCase(key))
        }
    }

    static displayName = 'Icon'

    static propTypes = {
        name: PropTypes.string.isRequired,
        theme: PropTypes.shape({
            icon: PropTypes.string
        }),
        size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'self']),
        onError: PropTypes.func,
        onClick: PropTypes.func
    }

    static defaultProps = {
        theme: defaultTheme,
        size: void 0,
        onError: _.noop,
        onClick: _.noop
    }

    /**
     * Метод для фиксирования префикса (process.env.PKG_ID) для генерации уникальных id в svg иконках
     * @param projectId
     */
    static setProject = (projectId) => {
        Icon.iconProjectId = projectId
    }

    componentDidMount () {
        this.loadIcons(this.props)
    }

    // eslint-disable-next-line babel/camelcase, comment: React UNSAFE method
    UNSAFE_componentWillReceiveProps (nextProps) {
        this.loadIcons(nextProps)
    }

    componentWillUnmount () {
        this.unmount = true
    }

    getName = (fullPath) => _.camelCase(_.last(fullPath.split(SLASH)))
    getNamespace = (fullPath) => _.dropRight(fullPath.split(SLASH)).join(SLASH)

    static namespaces = {}
    static theme = defaultTheme
    static iconProjectId = ''
    static loadedList = {}

    loadIcons = (props) => {
        const namespace = this.getNamespace(props.name)
        const { onError } = this.props

        if (namespace && _.isFunction(Icon.namespaces[namespace])) {
            Icon.namespaces[namespace]()
                .then(() => {
                    if (!this.unmount) {
                        Icon.loadedList[namespace] = true
                        this.forceUpdate()
                    }
                }).catch(onError)
        }
    }

    addUniqueId = (icon, namespace, name) => {
        let formattedIcon = icon
        const newIdBase = `${Icon.iconProjectId}::${namespace}/${name}::`
        const refIds = icon?.match(/(id="([^\s"])+")/g)
        if (refIds) {
            refIds.forEach((refId) => {
                const refIdForm = refId.substring(4, refId.length - 1)
                const newId = newIdBase + _.uniqueId()
                formattedIcon = _.replace(formattedIcon, new RegExp(`#${refIdForm}`, 'g'), `#${newId}`)
                formattedIcon = _.replace(formattedIcon, new RegExp(`id="${refIdForm}"`, 'g'), `id="${newId}"`)
            })
        }

        return formattedIcon
    }

    render () {
        const { name: fullPath, theme, size, onError } = this.props

        const namespace = this.getNamespace(fullPath)
        const name = this.getName(fullPath)

        if (!_.has(Icon.namespaces, [namespace, name])) {
            if (!Icon.namespaces[namespace] || Icon.loadedList[namespace]) {
                onError()
            }

            return null
        }
        const icon = _.get(Icon.namespaces, [namespace, name])
        const formattedIcon = this.addUniqueId(icon, namespace, name)

        const passedProps = _(this.props)
            .omit(iconOmit)
            .extend({
                'data-unit': 'icon',
                className: cs(size === 'self' ? theme[size] : cs(theme.icon, theme[size])),
                dangerouslySetInnerHTML: {
                    __html: formattedIcon
                }
            })
            .value()

        return <span {...passedProps} />
    }
}

export default Icon
