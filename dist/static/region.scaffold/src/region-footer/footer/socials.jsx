import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'

import vk from './assets/vk.svg'
import twitter from './assets/twitter.svg'
import ok from './assets/ok.svg'
import youtube from './assets/youtube.svg'
import facebook from './assets/facebook.svg'

const ListLink = ({ href, id, icon }) => (
    <li className="scaffold__region-footer-social">
        <a
            className="scaffold__region-footer-social-link"
            title={i18next.t(`region.scaffold:${id}`)}
            target=" _blank"
            rel="noopener noreferrer"
            href={href}
            // eslint-disable-next-line react/no-danger, comment: TODO: move to IconLoader
            dangerouslySetInnerHTML={{ __html: icon }}
        />
    </li>
)

ListLink.propTypes = {
    href: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

const socials = [
    {
        href: 'https://www.facebook.com/bankdruzey',
        icon: facebook,
        id: 'fb'
    },
    {
        href: 'http://vk.com/bankdruzey',
        icon: vk,
        id: 'vk'
    },
    {
        href: 'https://twitter.com/sberbank/',
        icon: twitter,
        id: 'twitter'
    },
    {
        href: 'http://www.youtube.com/sberbank',
        icon: youtube,
        id: 'youtube'
    },
    {
        href: 'https://ok.ru/sberbank',
        icon: ok,
        id: 'ok'
    }
]

export default () => (
    <div className="scaffold__region-footer-socials-wrapper">
        <ul className="scaffold__region-footer-socials">
            {socials.map((item) => (
                <ListLink
                    {...item}
                    key={item.id}
                />
            ))}
        </ul>
    </div>
)
