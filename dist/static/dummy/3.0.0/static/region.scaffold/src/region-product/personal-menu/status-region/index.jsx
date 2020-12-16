import React from 'react'
import PropTypes from 'prop-types'

export const StatusRegion = ({
    children,
    loading,
    error,
    showContentWhileLoading,
    showContentWhileError,
    loaderComponent: LoaderComponent,
    errorComponent: ErrorComponent
}) => {
    if (loading) {
        return (
            <LoaderComponent isLoading={loading} showContentWhileLoading={showContentWhileLoading}>
                {children}
            </LoaderComponent>
        )
    }

    if (error) {
        return (
            <ErrorComponent>
                {showContentWhileError && children}
            </ErrorComponent>
        )
    }

    return children
}

StatusRegion.defaultProps = {
    children: null,
    loading: false,
    error: false,
    showContentWhileLoading: false,
    showContentWhileError: false,
    loaderComponent: () => {},
    errorComponent: () => {}
}

StatusRegion.propTypes = {
    children: PropTypes.node,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    showContentWhileLoading: PropTypes.bool,
    showContentWhileError: PropTypes.bool,
    loaderComponent: PropTypes.func,
    errorComponent: PropTypes.func
}
