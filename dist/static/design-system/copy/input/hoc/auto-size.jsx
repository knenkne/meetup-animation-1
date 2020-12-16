import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { getDisplayName } from '../../utils/get-display-name'
import { setHeight, setWidth } from '../utils'

export const autoSizeFactory = ({ minHeight, minWidth, maxHeight, maxWidth }) =>
    (Component) => class AutoSize extends React.PureComponent {
        static displayName = getDisplayName(Component, 'AutoSizedComponent')

        static propTypes = {
            refWrapper: PropTypes.func
        }

        static defaultProps = {
            refWrapper: _.noop
        }

        componentDidMount () {
            setHeight(this.refWrapper, minHeight, maxHeight)
            setWidth(this.refWrapper, minWidth, maxWidth)
        }

        componentDidUpdate () {
            setHeight(this.refWrapper, minHeight, maxHeight)
            setWidth(this.refWrapper, minWidth, maxWidth)
        }

        setRef = (component) => {
            this.props.refWrapper(component)
            this.refWrapper = component
        }

        static WrappedComponent = Component

        render () {
            return <Component {...this.props} refWrapper={this.setRef} />
        }
    }
