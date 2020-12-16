import React from 'react'

export const mockFieldAdapter = (Component) => {
    const FieldAdapter = ({ input, meta, ...otherProps }) => {
        const passedProps = Object.assign(
            otherProps,
            input,
            meta,
            {
                formName: meta.form,
                initialValue: meta.initial
            }
        )

        return <Component {...passedProps} />
    }

    FieldAdapter.defaultProps = {
        input: {},
        meta: {}
    }

    FieldAdapter.WrappedComponent = Component

    return FieldAdapter
}
