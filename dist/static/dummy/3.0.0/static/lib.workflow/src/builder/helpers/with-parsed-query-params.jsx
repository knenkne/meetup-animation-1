import React from 'react'

import { extractAndParseQueryParams } from '../../adapter/utils'

export const withParsedQueryParams = (WrappedComponent) => {
    const Wrapped = (props) => {
        const parsedQueryParams = extractAndParseQueryParams()

        const passedProps = {
            ...props,
            location: {
                query: parsedQueryParams
            }
        }

        return <WrappedComponent {...passedProps} />
    }

    Wrapped.displayName = 'WorkflowWithParsedQueryParams'

    return Wrapped
}
