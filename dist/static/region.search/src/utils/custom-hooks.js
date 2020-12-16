import { useMemo, useEffect, useState } from 'react'

import { MARGIN_LEFT } from '../header/constants'

import { checkHtmlCodes } from './check-html-codes'

const getMarginLeft = (isErib) => isErib ? MARGIN_LEFT.ERIB : MARGIN_LEFT.DEFAULT

export const useMarkup = (string) => useMemo(() => checkHtmlCodes(string), [string])

export const useErib = () => {
    const [isErib, setIsErib] = useState(false)

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsErib(
                document.body.classList.contains('is-legacy') ||
                    document.body.classList.contains('is-erib')
            )
        })

        observer.observe(document.body, { attributes: true })

        return () => observer.disconnect()
    })

    return {
        isErib,
        marginLeft: getMarginLeft(isErib)
    }
}

