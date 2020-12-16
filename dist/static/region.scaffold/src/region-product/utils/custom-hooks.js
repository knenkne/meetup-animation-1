import { useMemo, useState, useEffect, useCallback } from 'react'

import { INITIAL, LOADING, SUCCESS } from '../personal-menu/utils/constants'

const LONG_PRESS_MS = 300

export const useMarkup = (name = '') =>
    useMemo(() => String(name)
      ?.replace(/(&#0?34;|&quot;)/gm, '"')
      ?.replace(/&#0?39;/gm, "'"), [name])

export const useLongPress = (fn = () => {}, ms = LONG_PRESS_MS) => {
    const [startLongPress, setStartLongPress] = useState(false)
    const [status, setStatus] = useState(INITIAL)

    useEffect(() => {
        let timerId
        if (startLongPress) {
            setStatus(LOADING)
            timerId = setTimeout(() => {
                fn()
                setStatus(SUCCESS)
            }, ms)
        } else {
            clearTimeout(timerId)
            setStatus(INITIAL)
        }

        return () => {
            setStatus(INITIAL)
            clearTimeout(timerId)
        }
    }, [startLongPress])

    const start = useCallback(() => {
        setStartLongPress(true)
    }, [])
    const stop = useCallback(() => {
        setStartLongPress(false)
    }, [])

    return {
        onMouseDown: start,
        onMouseUp: stop,
        onTouchStart: start,
        onTouchEnd: stop,
        status
    }
}
