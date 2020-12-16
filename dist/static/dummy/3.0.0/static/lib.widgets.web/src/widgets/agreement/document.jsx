import React from 'react'
import PropTypes from 'prop-types'
import { Loader, Markdown } from '@sbol/lib.ui'

import style from './style.css'

const documentTheme = {
    loader: style.documentLoader,
    loaderPoint: style.documentLoaderPoint
}

const renderPdf = (url) => (
    <iframe
        className={style.documentFrame}
        src={url}
        title={url}
        // key указан для обновления элемента iframe, чтобы он не сохранял свою историю в window.history
        key={url}
    />
)

const renderMD = (document) => (
    <div className={style.documentMd}>
        <Markdown.Full content={document} />
    </div>
)

export const Document = (props) => {
    if (props.loading) {
        return (
            <div className={style.document}>
                <Loader.Button theme={documentTheme} />
            </div>
        )
    }
    const isPdf = props.url && !props.document

    return (
        <div className={style.document} data-node="agreement:view">
            {isPdf ? renderPdf(props.url) : renderMD(props.document)}
        </div>
    )
}

Document.propTypes = {
    loading: PropTypes.bool,
    document: PropTypes.string,
    url: PropTypes.string
}

Document.defaultProps = {
    loading: false,
    document: void 0,
    url: void 0
}
