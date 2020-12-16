import React from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

export const Version = ({ logoUrl, version, name, link }) => (
    <div className={style.linkWrapper}>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={style.link}
        >
            <span
                dangerouslySetInnerHTML={{ __html: logoUrl }} // eslint-disable-line react/no-danger, comment: размещаем лого в свг
                className={style.linkLogo}
            />
            <span className={style.linkText}>
                {name}
            </span>
        </a>
        {` v${version}`}
    </div>
)

Version.propTypes = {
    logoUrl: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}
