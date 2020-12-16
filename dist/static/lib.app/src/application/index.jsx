import React from 'react'
import PropTypes from 'prop-types'
import i18nextOriginal from 'i18next'

import { getConfigValue } from '../config'
import { log } from '../log'
import { i18nInit, isAnyData } from '../i18next'

import projectName from './project-name'

export class Application extends React.Component {
    static propTypes = {
        i18next: PropTypes.object,
        libs: PropTypes.object,
        locales: PropTypes.array,
        name: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
        getComponentPromise: PropTypes.func,
        redirectOnError: PropTypes.bool,
        children: PropTypes.node
    }

    static defaultProps = {
        getComponentPromise: () => Promise.resolve(),
        name: '',
        version: '',
        i18next: i18nextOriginal,
        libs: {},
        locales: [],
        redirectOnError: false,
        children: null
    }

    state = {
        isLoading: false
    }

    componentWillMount () {
        const { i18next, name, libs, locales, version } = this.props
        projectName.set(name)

        if (!i18next || isAnyData(i18next)) {
            this.loadComponent()
        } else {
            i18nInit(
                name,
                version,
                libs,
                locales,
                getConfigValue('lang'),
                i18next
            ).then(this.loadComponent)
        }
    }

    componentWillUnmount () {
        this.unmount = true
    }

    componentDidLoad = (component) => {
        if (component && component.default && !this.unmount) {
            this.setState({ App: component.default })
        }
    }

    componentDidCatch (error) {
        log.error(error)

        if (
            process.env.NODE_ENV === 'production' ||
            this.props.redirectOnError
        ) {
            // TODO: отдебажить под правильную настройку
            // TODO: закомментировано до лучших времен
            // TODO: Не перекидывать клиента на другую страницу!
            // window.location = getConfigValue('error.500.url')
        }
    }

    loadComponent = () =>
        this.props
            .getComponentPromise()
            .then(this.componentDidLoad)
            .then(() => this.setState({ isLoading: true }))
            .catch(this.componentDidCatch)

    render () {
        if (!this.state.isLoading) {
            return false
        }

        if (this.props.children) {
            return this.props.children
        }

        const { App } = this.state
        return !!App && <App />
    }
}
