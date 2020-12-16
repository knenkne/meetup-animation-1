/* eslint-disable max-lines, comment: fat component */
/* eslint-disable @sbol/common/no-cyrillic-outside-cms, comment: уберем после внедрения локалей */
import React, { Fragment, useState, useEffect, useCallback } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {
    format,
    isValid,
    isBefore,
    startOfDay,
    endOfDay,
    subMonths,
    addMonths,
    subYears,
    addYears,
    isSameDay
} from 'date-fns'

import { Input } from '../../input'
import PopupWrapper from '../../popup-wrapper/popup-wrapper'
import { mergeTheme } from '../../utils'
import { SubmitButton } from '../components/common/submit-button'
import { LOCALE, RANGE_MODES, MASK_DATE } from '../constants'
import { fullISOFormat, isDateValid, parseRuDate } from '../utils'

import style from './style.css'
import RangeInput from './components/range-input'
import Month from './components/month'
import Months from './components/months'
import Years from './components/years'
import RangeControl from './components/range-control'

const inputTheme = mergeTheme(Input.theme, { input: style.input })
const emptyArray = []
const emptyString = ''
// Для подсвечивания поля с ошибкой без текста ошибки
const notEmptyString = ' '

// eslint-disable-next-line no-warning-comments, comment: Чтобы не забыть
// TODO Убрать, когда будет внедрятся локализация lib.ui
const localization = {
    accept: 'Применить',
    reset: 'Сбросить',
    error: 'Вы ввели недопустимую дату'
}

// eslint-disable-next-line complexity, comment: complexity of 19
const RangePicker = (props) => {

    const {
        from: initialFrom,
        to: initialTo,
        naked,
        names,
        disabled,
        onChange,
        restriction,
        initialViewDate,
        description
    } = props


    const fromFieldName = _.get(names, '0', 'range-picker:from')
    const fromFieldProps = _.get(props, [fromFieldName, 'input'], { value: emptyString })
    const fromFieldMeta = _.get(props, [fromFieldName, 'meta'])
    const toFieldName = _.get(names, '1', 'range-picker:to')
    const toFieldProps = _.get(props, [toFieldName, 'input'], { value: emptyString })
    const toFieldMeta = _.get(props, [toFieldName, 'meta'])

    const initialDate = isValid(initialViewDate) ? fullISOFormat(initialViewDate) : fullISOFormat(new Date())

    const [toInputRef, setToInputRef] = useState(emptyString)
    const [fromInputRef, setFromInputRef] = useState(emptyString)

    const [mode, setMode] = useState(RANGE_MODES.MONTH)

    const [rangeFrom, setRangeFrom] = useState(fromFieldProps.value)
    const [rangeTo, setRangeTo] = useState(toFieldProps.value)

    const [rangeInputFrom, setRangeInputFrom] = useState(fromFieldProps.value)
    const [rangeInputTo, setRangeInputTo] = useState(toFieldProps.value)

    const focusedInput = _.findKey(props, 'meta.active') || null

    const [isRangeMode, setIsRangeMode] = useState(false)
    const [viewDate, setViewDate] = useState(initialDate)

    const [isFromError, setIsFromError] = useState(emptyString)
    const [isToError, setIsToError] = useState(emptyString)
    const [isErrorShown, setIsErrorShown] = useState(false)

    const setFocusBack = useCallback(() => {
        switch (focusedInput) {
            case toFieldName: {
                toInputRef.focus()
                break
            }

            case fromFieldName: {
                fromInputRef.focus()
                break
            }

            default: {
                break
            }
        }
    }, emptyArray)

    const setMonthMode = useCallback((e) => {
        e.preventDefault()
        setFocusBack()
        
        setMode(RANGE_MODES.MONTH)
    }, [toInputRef, fromInputRef])
    const setMonthsMode = useCallback((e) => {
        e.preventDefault()
        setFocusBack()
        
        setMode(RANGE_MODES.MONTHS)
    }, [toInputRef, fromInputRef])
    const setYearsMode = useCallback((e) => {
        e.preventDefault()
        setFocusBack()

        setMode(RANGE_MODES.YEARS)
    }, [toInputRef, fromInputRef])

    const isDateAllowed = useCallback((date) => {
        const parsedDate = parseRuDate(date)
        return restriction(parsedDate, parsedDate && {
            start: startOfDay(parsedDate),
            end: endOfDay(parsedDate)
        })
    }, emptyArray)

    const getToInputRef = useCallback((element) => setToInputRef(element), [])
    const getFromInputRef = useCallback((element) => setFromInputRef(element), [])

    const fillRangeInitial = useCallback(() => {
        if (isValid(initialFrom) && isValid(initialTo)) {
            const formattedFrom = fullISOFormat(initialFrom)
            const formattedTo = fullISOFormat(initialTo)
            
            if (fromFieldProps?.onChange) {
                fromFieldProps.onChange(formattedFrom)
            }
    
            if (toFieldProps?.onChange) {
                toFieldProps.onChange(formattedTo)
            }

            setRangeInputFrom(formattedFrom)
            setRangeInputTo(formattedTo)
            setRangeFrom(formattedFrom)
            setRangeTo(formattedTo)
            setViewDate(formattedFrom)
        }
    }, emptyArray)

    const handleSubmit = useCallback(() => {
        const isEmptyDates = rangeTo === emptyString && rangeFrom === emptyString
        const isRangeFromValid = isEmptyDates || (rangeFrom && rangeFrom.length >= MASK_DATE.length && isValid(rangeFrom) && isDateAllowed(rangeFrom) && !isFromError)
        const isRangeToValid = isEmptyDates || (rangeTo && rangeTo.length >= MASK_DATE.length && isValid(rangeTo) && isDateAllowed(rangeTo) && !isToError)

        if (!isRangeFromValid) {
            setIsFromError(notEmptyString)
        }
        
        if (!isRangeToValid) {
            setIsToError(notEmptyString)
        }

        if (!isRangeFromValid || !isRangeToValid) {
            setIsErrorShown(true)

            return
        }

        onChange({ from: rangeFrom, to: rangeTo })
    }, [rangeFrom, rangeTo, isFromError, isToError])

    const handleReset = useCallback((isViewDate = true) => {
        setIsRangeMode(false)
        setRangeFrom(emptyString)
        setRangeTo(emptyString)
        setRangeInputFrom(emptyString)
        setRangeInputTo(emptyString)

        if (fromFieldProps?.onChange) {
            fromFieldProps.onChange(emptyString)
        }

        if (toFieldProps?.onChange) {
            toFieldProps.onChange(emptyString)
        }

        setIsFromError(emptyString)
        setIsToError(emptyString)
        setIsErrorShown(false)

        if (isViewDate) {
            setViewDate(initialViewDate)
        }

    }, emptyArray)

    const handleChangeInputFrom = useCallback((date) => {
        if (fromFieldProps?.onChange) {
            fromFieldProps.onChange(date)
        }

        setRangeInputFrom(date)
        
        if (isDateValid(date)) {
            const parsedDate = parseRuDate(date)

            setRangeInputFrom(parsedDate)
            setViewDate(parsedDate)
            setRangeFrom(parsedDate)

            if (isDateAllowed(date)) {

                setIsFromError(emptyString)

                if (isValid(rangeInputTo) && isDateAllowed(rangeInputTo)) {
                    if (isBefore(parsedDate, rangeInputTo) || isSameDay(parsedDate, rangeInputTo)) {
                        setIsFromError(emptyString)
                        setIsErrorShown(false)
                    } else {
                        setIsFromError(notEmptyString)
                    }
                } else if (toInputRef) {
                    toInputRef.focus()
                }
            } else {
                setIsFromError(notEmptyString)
            }
        }
    }, [rangeInputFrom, isRangeMode, isFromError, isErrorShown])

    const handleChangeInputTo = useCallback((date) => {
        if (toFieldProps?.onChange) {
            toFieldProps.onChange(date)
        }

        setRangeInputTo(date)

        if (isDateValid(date)) {
            const parsedDate = parseRuDate(date)

            setRangeTo(parsedDate)
            setRangeInputTo(parsedDate)
            setViewDate(parsedDate)

            if (isDateAllowed(date)) { 
                
                setIsToError(emptyString)
                
                if (isValid(rangeInputFrom) && isDateAllowed(rangeInputFrom)) {
                    if (isBefore(rangeInputFrom, parsedDate) || isSameDay(rangeInputFrom, parsedDate)) {
                        setIsToError(emptyString)
                        setIsErrorShown(false)
                    } else {
                        setIsToError(notEmptyString)
                    }
                } else if (fromInputRef) {
                    fromInputRef.focus()
                }
            } else {
                setIsToError(notEmptyString)
            }
        }
    }, [rangeInputTo, isRangeMode, isFromError, isErrorShown])

    const handleChangeRangeFrom = useCallback((date) => {
        if ((rangeFrom && rangeTo) || isBefore(rangeTo, date)) {
            handleReset(false)
        }

        const value = fullISOFormat(_.get(date, 'target.value', date))

        if (fromFieldProps?.onChange) {
            fromFieldProps.onChange(value)
        }

        setRangeInputFrom(value)
        setRangeFrom(value)

        setIsFromError(emptyString)
        setIsErrorShown(false)
    }, [rangeFrom, rangeTo])
    
    const handleChangeRangeTo = useCallback((date) => {
        const value = fullISOFormat(_.get(date, 'target.value', date))

        if (isBefore(value, rangeFrom)) {
            handleChangeRangeFrom(value)

            return
        }

        if (toFieldProps?.onChange) {
            toFieldProps.onChange(value)
        }

        setRangeInputTo(value)
        setRangeTo(value)

        setIsToError(emptyString)
        setIsErrorShown(false)
    }, [rangeFrom, rangeTo])

    const handleChangePrevMonth = useCallback((e) => {
        e.preventDefault()
        setFocusBack()

        const resultValue = fullISOFormat(subMonths(e.currentTarget.value, 1))
        setViewDate(resultValue)
    }, [toInputRef, fromInputRef])
    const handleChangeNextMonth = useCallback((e) => {
        e.preventDefault()
        setFocusBack()

        const resultValue = fullISOFormat(addMonths(e.currentTarget.value, 1))
        setViewDate(resultValue)
    }, [toInputRef, fromInputRef])
    const handleChangePrevYear = useCallback((e) => {
        e.preventDefault()
        setFocusBack()

        const resultValue = fullISOFormat(subYears(e.currentTarget.value, 1))
        setViewDate(resultValue)
    }, [toInputRef, fromInputRef])
    const handleChangeNextYear = useCallback((e) => {
        e.preventDefault()
        setFocusBack()
        
        const resultValue = fullISOFormat(addYears(e.currentTarget.value, 1))
        setViewDate(resultValue)
    }, [toInputRef, fromInputRef])

    const isMonthMode = mode === RANGE_MODES.MONTH
    const isMonthsMode = mode === RANGE_MODES.MONTHS
    const isYearsMode = mode === RANGE_MODES.YEARS

    const isError = (isToError || isFromError) && isErrorShown

    const isResetButtonVisible = rangeFrom || rangeTo

    const Wrapper = naked ? Fragment : PopupWrapper

    useEffect(fillRangeInitial, emptyArray)
    useEffect(() => {
        if (rangeTo || rangeFrom) {
            setIsRangeMode(true)
        }

        if (rangeTo && rangeFrom) {
            setIsRangeMode(false)
        }

        if (isBefore(rangeFrom, rangeTo) && isDateAllowed(rangeFrom) && isDateAllowed(rangeTo)) {
            setIsErrorShown(emptyString)
            setIsFromError(emptyString)
            setIsToError(emptyString)
        }

    }, [rangeFrom, rangeTo])

    return (
        <Wrapper>
            <div className={style.rangeWrapper}>
                <div className={cn(style.inputsWrapper, isError && style.inputsWrapperError)}>
                    <RangeInput
                        {...fromFieldProps}
                        {...fromFieldMeta}
                        value={rangeInputFrom}
                        error={isFromError}
                        theme={inputTheme}
                        disabled={disabled}
                        id={fromFieldName}
                        refWrapper={getFromInputRef}
                        onChange={handleChangeInputFrom}
                    />
                    <div className={style.inputsDivider} />
                    <RangeInput
                        {...toFieldProps}
                        {...toFieldMeta}
                        value={rangeInputTo}
                        error={isToError}
                        theme={inputTheme}
                        disabled={disabled}
                        id={toFieldName}
                        refWrapper={getToInputRef}
                        onChange={handleChangeInputTo}
                    />
                </div>
                {isError && (
                    <div className={style.errorWrapper}>
                        <span>{description}</span>
                    </div>
                )}
                <div className={style.contentWrapper}>
                    <div
                        className={cn(
                            style.controlsWrapper,
                            isMonthsMode && style.controlsWrapperMonths,
                            isYearsMode && style.controlsWrapperYears,
                        )}
                    >
                        <RangeControl
                            dataUnit="range:switcher:months"
                            viewDate={viewDate}
                            title={format(viewDate, 'MMMM', LOCALE)}
                            isActive={isMonthsMode}
                            onControlClick={isMonthsMode ? setMonthMode : setMonthsMode}
                            onPrevClick={handleChangePrevMonth}
                            onNextClick={handleChangeNextMonth}
                            customControlClassName={cn(style.rangeControl, style.monthsControl)}
                        />
                        <RangeControl
                            onClick={isYearsMode ? setMonthMode : setYearsMode}
                            viewDate={viewDate}
                            dataUnit="range:switcher:years"
                            title={format(viewDate, 'YYYY', LOCALE)}
                            isActive={isYearsMode}
                            onControlClick={isYearsMode ? setMonthMode : setYearsMode}
                            onPrevClick={handleChangePrevYear}
                            onNextClick={handleChangeNextYear}
                            customControlClassName={cn(style.rangeControl, style.yearsControl)}
                        />
                    </div>
                    {isMonthMode && (
                        <Month
                            isFromError={isFromError}
                            isToError={isToError}
                            viewDate={viewDate}
                            restriction={restriction}
                            isRangeMode={isRangeMode}
                            setIsRangeMode={setIsRangeMode}
                            rangeTo={rangeTo}
                            handleChangeRangeFrom={handleChangeRangeFrom}
                            rangeFrom={rangeFrom}
                            handleChangeRangeTo={handleChangeRangeTo}
                            focusedInput={focusedInput}
                        />
                    )}
                    {isMonthsMode && (
                        <Months
                            viewDate={viewDate}
                            setViewDate={setViewDate}
                            restriction={restriction}
                            setMonthMode={setMonthMode}
                        />
                    )}
                    {isYearsMode && (
                        <Years
                            viewDate={viewDate}
                            setViewDate={setViewDate}
                            restriction={restriction}
                            setMonthMode={setMonthMode}
                            setFocusBack={setFocusBack}
                        />
                    )}
                    {isMonthMode && (
                        <div className={cn(style.bottomButtons, isResetButtonVisible && style.bottomButtonsBetween)}>
                            <SubmitButton
                                onSubmit={handleSubmit}
                                text={localization.accept}
                            />
                            {isResetButtonVisible && (
                                <SubmitButton
                                    onSubmit={handleReset}
                                    text={localization.reset}
                                    isReset
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

RangePicker.propTypes = {
    from: PropTypes.string,
    to: PropTypes.string,
    naked: PropTypes.bool,
    names: PropTypes.array,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    restriction: PropTypes.func,
    initialViewDate: PropTypes.string,
    description: PropTypes.string
}

RangePicker.defaultProps = {
    from: emptyString,
    to: emptyString,
    naked: false,
    names: [],
    disabled: false,
    onChange: _.noop,
    restriction: _.stubTrue,
    description: localization.error,
    initialViewDate: fullISOFormat(new Date()),
}

RangePicker.displayName = 'Calendar.RangePicker'

export { RangePicker }
