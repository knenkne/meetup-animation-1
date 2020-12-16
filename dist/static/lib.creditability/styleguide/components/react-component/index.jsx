import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import style from './style.css'

const ReactComponentRenderer = (props, context) => {
    const { name, pathLine, description, examples, slug, tabBody } = props

    if (!context.styleguidist.getShowInterface()) {
        return (
            <div id={slug}>
                {examples}
            </div>
        )
    }

    return (
        <div className={style.root} id={slug}>
            <div className={classnames(style.meta, { [style.metaBorderBottom]: !!examples.props.examples })}>
                <header className={style.header}>
                    <a className={style.anchor} href={`#${slug}`}>
                        <h2 className={style.heading}>{name}</h2>
                    </a>
                    <p className={style.pathLine}>
                        {_.includes(window.location.hash, '!') ? (
                            <a className={style.isolatedLink} href="#" title="Back">{'←'}</a>
                        ) : (
                            <a className={style.isolatedLink} href={`#!/${name}`} title="Open isolated">{'⇢'}</a>
                        )}
                        {pathLine}
                    </p>
                    <div className={style.description}>
                        {description}
                    </div>
                </header>
                <div className={style.props}>
                    {tabBody}
                </div>
            </div>
            {examples.props.examples &&
            <div className={style.examples}>
                {examples}
            </div>
            }
        </div>
    )
}

ReactComponentRenderer.propTypes = {
    name: PropTypes.string.isRequired,
    pathLine: PropTypes.string.isRequired,
    description: PropTypes.node,
    examples: PropTypes.element,
    tabBody: PropTypes.element,
    slug: PropTypes.string
}
ReactComponentRenderer.contextTypes = {
    styleguidist: PropTypes.shape({
        getShowInterface: PropTypes.func
    })
}
ReactComponentRenderer.defaultProps = {
    description: void 0,
    examples: void 0,
    tabBody: void 0,
    slug: ''
}

export default ReactComponentRenderer
