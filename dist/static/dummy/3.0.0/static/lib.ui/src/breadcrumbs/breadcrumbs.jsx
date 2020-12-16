import React from 'react'

import { deprecate } from '../utils'

/**
 * DEPRECATED. DO NOT USE
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Breadcrumbs = () => <div />

Breadcrumbs.propTypes = {}
Breadcrumbs.defaultProps = {}
Breadcrumbs.displayName = 'Breadcrumbs'
Breadcrumbs.theme = {}

export default deprecate()(Breadcrumbs)
