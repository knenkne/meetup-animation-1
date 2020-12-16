import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'i18next'
import classnames from 'classnames'

import angleRight from '../../assets/angle-right.svg'
import angleLeft from '../../assets/angle-left.svg'

import style from './style.css'

const leftIcon = { __html: angleLeft }
const rightIcon = { __html: angleRight }

export const Navigation = ({ offers, activeOffer, onLeft, onRight }) => (
    <div className={style.controls}>
        <button
            onClick={onLeft}
            className={style.button}
            dangerouslySetInnerHTML={leftIcon}
            title={i18next.t('region.offers:scroll.backward')}
        />
        <div className={style.dotsWrapper}>
            <div className={style.dots}>
                {offers.map((banner, index) => (
                    <div
                        key={banner.uniqueId}
                        className={classnames(
                            style.dot,
                            index === activeOffer && style.active
                        )}
                    />
                ))}
                <div className={style.dot} />
            </div>
        </div>
        <button
            onClick={onRight}
            className={style.button}
            dangerouslySetInnerHTML={rightIcon}
            title={i18next.t('region.offers:scroll.forward')}
        />
    </div>
)

Navigation.propTypes = {
    offers: PropTypes.array,
    activeOffer: PropTypes.number,
    onLeft: PropTypes.func,
    onRight: PropTypes.func
}

Navigation.defaultProps = {
    offers: [],
    activeOffer: 0,
    onLeft: void '',
    onRight: void ''
}
