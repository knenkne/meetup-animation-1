import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from '@sbol/lib.ui'
import { getConfigValue, Link as AppLink } from '@sbol/lib.app'
import { camelCase } from 'lodash'

import styles from './style.css'
import { STATUS } from './status'
import { CapacityProductScale } from './CapacityProductScale'

const LINK_THEME = { ...Link.theme, link: styles.button }

const RULER = `${getConfigValue('res.url')}/lib.creditability/${process.env.VERSION}/assets/images/ruler`
const COMMON_PATH = `${getConfigValue('res.url')}/common/${getConfigValue('common.version')}/img/statuses/`
const getCommonImagePath = (image) => `${COMMON_PATH}${image}`

const IMAGES = {
    [STATUS.LC_ACCEPTED]: getCommonImagePath('female-done'),
    [STATUS.LC_CALCULATION_IN_PROGRESS]: getCommonImagePath('female-waiting'),
    [STATUS.LC_CALCULATION_TIMEOUT_ERROR]: getCommonImagePath('female-error'),
    [STATUS.LC_DECLINED]: getCommonImagePath('female-error'),
    [STATUS.LC_ERROR]: RULER,
    [STATUS.LC_EXPIRED]: getCommonImagePath('female-info'),
    [STATUS.LC_NEED_MORE_INFORMATION]: getCommonImagePath('female-info'),
    [STATUS.LC_NOT_CALCULATED]: RULER
}

export const getPathImage = (status) => IMAGES[status] || RULER
export const getImage = (path) => path.split('/').reverse()[0]

export const CapacityProductDumb = (props) => {
    const { status, locales, parts, link, onButtonClick } = props
    const { title, description, button } = locales
    const imagePath = getPathImage(status)
    const image = getImage(imagePath)

    return (
        <Fragment>
            <div className={styles.header}>
                <div className={styles.scaleContainer}>
                    {parts && <CapacityProductScale {...parts} />}
                </div>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <img
                className={classnames(styles.status, styles[camelCase(image)])}
                src={`${imagePath}.png`}
                srcSet={`${imagePath}@2x.png 2x, ${imagePath}@3x.png 3x`}
                alt=""
                role="presentation"
            />
            <div className={styles.advice}>{description}</div>
            {button && <Link
                as={AppLink}
                colorScheme="button"
                href={link}
                theme={LINK_THEME}
                onClick={onButtonClick}
            >{button}</Link>}
        </Fragment>
    )
}

CapacityProductDumb.propTypes = {
    status: PropTypes.string.isRequired,
    locales: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        button: PropTypes.string
    }).isRequired,
    parts: PropTypes.shape({
        available: PropTypes.number.isRequired,
        used: PropTypes.number.isRequired,
        reserved: PropTypes.number.isRequired
    }),
    link: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired
}

CapacityProductDumb.defaultProps = {
    parts: void 0
}

CapacityProductDumb.displayName = 'CapacityProductDumb'
