import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export const FullscreenPortal = ({ children, domNode }) => ReactDOM.createPortal(
    children,
    domNode
)

FullscreenPortal.propTypes = {
    children: PropTypes.element.isRequired,
}
