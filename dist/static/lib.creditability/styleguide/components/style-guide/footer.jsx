import React from 'react'
import PropTypes from 'prop-types'

import style from './style.css'

export const Footer = ({ homepageUrl }) => (
    <footer className={style.footer}>
        {'Generated with '}
        <a
            className={style.link}
            href={homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            {'React Styleguidist'}
        </a>
    </footer>
)

Footer.propTypes = {
    homepageUrl: PropTypes.string.isRequired
}
