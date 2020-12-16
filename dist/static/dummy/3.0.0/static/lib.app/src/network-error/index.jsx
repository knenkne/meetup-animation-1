import React from 'react'

import { getNetworkError, getConfigValue } from '../config'
import { log } from '../log'

export class NetworkError extends React.Component {
    constructor (props) {
        super(props)
        this.loadComponent()
    }

    componentWillUnmount () {
        this.unmount = true
        if (this.anchor.contains(this.page)) {
            this.anchor.removeChild(this.page)
        }
    }

    setRef = (component) => {
        this.anchor = component
    }

    componentDidLoad = (component) => {
        if (component && component.default && this.anchor && !this.unmount) {
            this.page = component.default()
            this.anchor.appendChild(this.page)
        }
    }

    componentDidCatch (error) {
        log.error(error)

        if (process.env.NODE_ENV === 'production') {
            // TODO: отдебажить под правильную настройку
            window.location = getConfigValue('error.500.url')
        }
    }

    loadComponent = () => getNetworkError()
        .then(this.componentDidLoad)
        .catch(this.componentDidCatch)

    render () {
        return <div ref={this.setRef} />
    }
}
