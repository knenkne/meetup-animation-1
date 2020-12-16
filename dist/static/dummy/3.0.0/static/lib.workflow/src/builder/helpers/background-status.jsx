import React, { useMemo } from 'react'
import { PropTypes } from 'prop-types'
import _ from 'lodash'
import cx from 'classnames'
import { getConfigValue } from '@sbol/lib.app'
import { Background } from '@sbol/lib.ui'

import style from './background-status.css'

const MALE = 'male'
const FEMALE = 'female'
const STATUSES = {
    success: 'success',
    done: 'success',
    error: 'error',
    waiting: 'waiting',
    info: 'info'
}
const PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/statuses/`

const getColorScheme = (status) => `gradient-${STATUSES[status] || 'basic'}-wrapper`

export const BackgroundStatus = ({ children, mode, theme, ...props }) => {
    const sex = useMemo(() => _.sample([MALE, FEMALE]), [])
    const modeStatus = useMemo(
        () => Object.keys(STATUSES).includes(mode) ? mode : void 0,
        [mode]
    )
    const imgName = `${sex}-${mode}`

    return (
        <Background
            mode={modeStatus}
            colorScheme={getColorScheme(modeStatus)}
            {...props}
        >
            {modeStatus && (
                <div className={theme.container}>
                    <img
                        className={cx(theme.statusImage)}
                        src={`${PATH}${imgName}.png`}
                        srcSet={`${PATH}${imgName}_2x.png 2x, ${PATH}${imgName}_3x.png 3x`}
                        alt=""
                        role="presentation"
                    />
                </div>
            )}
            {children}
        </Background>
    )
}

BackgroundStatus.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    mode: PropTypes.oneOf([void 0, 'done', 'error', 'waiting', 'info'])
}

BackgroundStatus.defaultProps = {
    theme: style,
    mode: void 0
}

BackgroundStatus.theme = style
