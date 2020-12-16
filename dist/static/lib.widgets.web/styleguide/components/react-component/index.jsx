import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import { isDemoInterface } from '../../utils'

import style from './style.css'

class ReactComponentRenderer extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        pathLine: PropTypes.string.isRequired,
        description: PropTypes.node,
        examples: PropTypes.element,
        tabBody: PropTypes.element,
        slug: PropTypes.string
    }
    static defaultProps = {
        description: void 0,
        examples: void 0,
        tabBody: void 0,
        slug: ''
    }

    state = {
        checkedBg: false
    }

    handleChange = () => {
        this.setState({
            checkedBg: !this.state.checkedBg
        })
    }

    render () {
        const { name, pathLine, description, examples, slug, tabBody } = this.props

        return (
            <div className={style.root}>
                {isDemoInterface() &&
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
                        <label>
                            <input type="checkbox" onChange={this.handleChange} value={this.state.checkedBg} />
                            <span>{'Сменить цвет фона'}</span>
                        </label>
                        <div className={style.description}>
                            {description}
                        </div>
                    </header>
                    <div className={style.props}>
                        {tabBody}
                    </div>
                </div>
                }
                {examples.props.examples &&
                <div className={classnames(style.examples, this.state.checkedBg && style.dark)} >
                    {examples}
                </div>
                }
            </div>
        )
    }
}

export default ReactComponentRenderer
