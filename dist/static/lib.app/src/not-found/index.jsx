import React from 'react'

import { getNotFound, getConfigValue } from '../config'
import { log } from '../log'

export class NotFound extends React.Component {
    constructor (props) {
        super(props)
        this.loadComponent()
    }

    componentDidCatch (error) {
        log.error(error)

        if (process.env.NODE_ENV === 'production') {
            // TODO: отдебажить под правильную настройку
            window.location = getConfigValue('error.500.url')
        }
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

    loadComponent = () => getNotFound()
        .then(this.componentDidLoad)
        .catch(this.componentDidCatch)

    render () {
        return <div ref={this.setRef} />
    }
}
