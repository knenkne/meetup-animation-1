import React from 'react'
import PropTypes from 'prop-types'

import { HeadlineStyled } from './headline.style'

export const Headline1 = (props) => <HeadlineStyled variant="h1" as="h1" {...props} />
export const Headline2 = (props) => <HeadlineStyled variant="h2" as="h2" {...props} />
export const Headline3 = (props) => <HeadlineStyled variant="h3" as="h3" {...props} />
export const Headline4 = (props) => <HeadlineStyled variant="h4" as="h4" {...props} />
export const Headline5 = (props) => <HeadlineStyled variant="h5" as="h5" {...props} />

const propTypes = {
    children: PropTypes.node.isRequired,
    mode: PropTypes.oneOf(['semibold', 'regular', 'bold']),
    indent: PropTypes.oneOf(['openspace', 'innerspace'])
}

const defaultProps = {
    mode: 'regular',
    indent: 'openspace'
}

Headline1.propTypes = propTypes
Headline1.defaultProps = defaultProps
Headline1.displayName = 'Headline'

Headline2.propTypes = propTypes
Headline2.defaultProps = defaultProps

Headline3.propTypes = propTypes
Headline3.defaultProps = defaultProps

Headline4.propTypes = propTypes
Headline4.defaultProps = defaultProps

Headline5.propTypes = propTypes
Headline5.defaultProps = defaultProps
