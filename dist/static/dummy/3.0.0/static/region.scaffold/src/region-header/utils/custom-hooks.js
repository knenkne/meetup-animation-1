import { useEffect, useState } from 'react'

export const useErib = () => {
    const [isErib, setIsErib] = useState(
        document.body.classList.contains('is-legacy') ||
            document.body.classList.contains('is-erib')
    )

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsErib(
                document.body.classList.contains('is-legacy') ||
                    document.body.classList.contains('is-erib')
            )
        })

        observer.observe(document.body, { attributes: true })

        return () => observer.disconnect()
    }, [])

    return isErib
}
