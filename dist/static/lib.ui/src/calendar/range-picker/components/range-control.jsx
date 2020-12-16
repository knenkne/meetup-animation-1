import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { parse } from 'date-fns'

import { FULL_ISO_FORMAT } from '../../constants'
import { Icon } from '../../../icon'
import Control from '../../components/common/control'
import { mergeTheme } from '../../../utils'

import style from './range-control.css'

const LAST_YEAR = 9999
const LAST_MONTH = 11

const RangeControl = (props) => {
    const {
        customControlClassName,
        onControlClick,
        onPrevClick,
        onNextClick,
        dataUnit,
        title,
        isActive,
        viewDate
    } = props

    const parsedDate = parse(viewDate, FULL_ISO_FORMAT, new Date())
    const isNextDisabled = (parsedDate.getFullYear() === LAST_YEAR && dataUnit === 'range:switcher:years') || (parsedDate.getFullYear() === LAST_YEAR && parsedDate.getMonth() === LAST_MONTH && dataUnit === 'range:switcher:months')
    const isPrevDisabled = (parsedDate.getFullYear() === 0 && dataUnit === 'range:switcher:years') || (parsedDate.getFullYear() === 0 && parsedDate.getMonth() === 0 && dataUnit === 'range:switcher:months')

    return (
        <div className={style.rangeControlWrapper}>
            <button
                tabIndex="-1"
                type="button"
                value={viewDate}
                onMouseDown={onPrevClick}
                className={cn(style.arrowButton, style.arrowButtonLeft)}
                disabled={isPrevDisabled}
            >
                <Icon name="icon:core/common/calendarArrowLeft" />
            </button>
            <Control
                title={title}
                withIcon={false}
                dataUnit={dataUnit}
                isActive={isActive}
                onClick={onControlClick}
                className={cn(style.mainButton, customControlClassName)}
            />
            <button
                tabIndex="-1"
                type="button"
                value={viewDate}
                onMouseDown={onNextClick}
                className={cn(style.arrowButton, style.arrowButtonRight)}
                disabled={isNextDisabled}
            >
                <Icon
                    name="icon:core/common/calendarArrowLeft"
                    theme={mergeTheme(Icon.theme, {
                        icon: cn(style.arrowIcon, style.arrowIconReverted)
                    })}
                />
            </button>
        </div>
    )
}


RangeControl.propTypes = {
    customControlClassName: PropTypes.string,
    onControlClick: PropTypes.func,
    onPrevClick: PropTypes.func,
    onNextClick: PropTypes.func,
    dataUnit: PropTypes.string,
    title: PropTypes.string,
    isActive: PropTypes.bool,
    viewDate: PropTypes.string
}

RangeControl.defaultProps = {
    customControlClassName: '',
    onControlClick: _.noop,
    onPrevClick: _.noop,
    onNextClick: _.noop,
    dataUnit: '',
    title: '',
    isActive: _.false,
    viewDate: ''
}

export default RangeControl
