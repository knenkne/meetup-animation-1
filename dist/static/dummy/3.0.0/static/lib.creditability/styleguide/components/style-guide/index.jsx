import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import qs from 'qs'
import i18next from 'i18next'

import ru from '../../../locales/ru.json'

import { Sidebar } from './sidebar'
import { Footer } from './footer'
import { Switcher } from './switcher'
import style from './style.css'

i18next.init({
    lng: 'ru',
    keySeparator: '/',
    resources: { ru: { 'lib.creditability': ru } }
})

const getQs = () => qs.parse(
    window.location.search,
    { ignoreQueryPrefix: true }
)

const updateQs = (nextState) => {
    window.location.search = qs.stringify(
        Object.assign(
            getQs(),
            nextState
        )
    )
}

const parseBool = (v) => v === 'true' || (v === 'false' ? false : v)

export class StyleGuideRenderer extends React.Component {
    static propTypes = {
        toc: PropTypes.node.isRequired,
        hasSidebar: PropTypes.bool,
        children: PropTypes.node.isRequired,
        homepageUrl: PropTypes.string
    }

    static childContextTypes = {
        styleguidist: PropTypes.shape({
            getShowInterface: PropTypes.func
        })
    }

    static defaultProps = {
        hasSidebar: false,
        homepageUrl: 'https://github.com/styleguidist/react-styleguidist'
    }

    constructor (props, context) {
        super(props, context)

        const {
            nightMode,
            hideSidebar,
            cleanInterface
        } = getQs()

        this.state = {
            normalMode: !parseBool(nightMode),
            showSidebar: !parseBool(hideSidebar),
            showInterface: !parseBool(cleanInterface)
        }

        if (this.state.normalMode) {
            document.body.classList.remove('-m-night')
        } else {
            document.body.classList.add('-m-night')
        }
    }

    getChildContext = () => ({
        styleguidist: {
            getShowInterface: this.getShowInterface
        }
    })

    getShowInterface = () => this.state.showInterface

    handleShowSidebar = () => {
        updateQs({ hideSidebar: this.state.showSidebar })

        this.setState({
            showSidebar: !this.state.showSidebar
        })
    }

    handleShowInterface = () => {
        updateQs({ cleanInterface: this.state.showInterface })

        this.setState({
            showInterface: !this.state.showInterface
        })
    }

    handleChangeNightMode = () => {
        updateQs({ nightMode: this.state.normalMode })

        this.setState({
            normalMode: !this.state.normalMode
        }, () => {
            if (this.state.normalMode) {
                document.body.classList.remove('-m-night')
            } else {
                document.body.classList.add('-m-night')
            }
        })
    }

    nightModeSwitcherTheme = {
        switcher: style.switcherNightMode,
        active: style.switcherNightModeActive,
        on: style.switcherNightModeWhite,
        off: style.switcherNightModeBlack
    }

    sidebarSwitcherTheme = {
        switcher: style.switcherSidebar,
        active: style.switcherSidebarActive,
        on: style.switcherSidebarOn,
        off: style.switcherSidebarOff
    }

    interfaceSwitcherTheme = {
        switcher: style.switcherInterface,
        active: style.switcherInterfaceActive,
        on: style.switcherInterfaceOn,
        off: style.switcherInterfaceOff
    }

    render () {
        const { toc, hasSidebar, children, homepageUrl } = this.props
        return (
            <div
                className={classnames(
                    style.root,
                    style.wrapper,
                    hasSidebar && this.state.showSidebar && this.state.showInterface && style.hasSidebar,
                    !this.state.normalMode && style.rootNightMode,
                    !this.state.showInterface && style.rootMobile
                )}
            >
                {hasSidebar && this.state.showSidebar && this.state.showInterface &&
                <Sidebar toc={toc} />
                }
                <ul className={style.controls}>
                    <li className={style.controlsSwitcher}>
                        <Switcher
                            value={this.state.normalMode}
                            onChange={this.handleChangeNightMode}
                            theme={this.nightModeSwitcherTheme}
                        />
                    </li>
                    <li className={style.controlsSwitcher}>
                        <Switcher
                            value={this.state.showSidebar}
                            onChange={this.handleShowSidebar}
                            theme={this.sidebarSwitcherTheme}
                        />
                    </li>
                    <li className={style.controlsSwitcher}>
                        <Switcher
                            value={this.state.showInterface}
                            onChange={this.handleShowInterface}
                            theme={this.interfaceSwitcherTheme}
                            id="interface-destroyer"
                        />
                    </li>
                </ul>
                <main className={classnames(style.content, !this.state.showInterface && style.contentMobile)}>
                    {children}
                    <Footer homepageUrl={homepageUrl} />
                </main>
            </div>
        )
    }
}

export default StyleGuideRenderer
