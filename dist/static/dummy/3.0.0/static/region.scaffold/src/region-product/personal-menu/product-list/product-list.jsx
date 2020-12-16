import React, { Component, Fragment } from 'react'
import { PropTypes } from 'prop-types'
import i18next from 'i18next'
import _ from 'lodash'

import { onToggleSection } from '../../../analytics'
import { Collapse } from '../collapse'
import { getFromStorage, setToStorage } from '../utils/storage'
import { StatusRegion } from '../status-region'
import { ERROR, LOADING } from '../utils/constants'
import { LazyRegion } from '../lazy-region'

import { ProductsListStyled } from './product-list.styles'
import { RefetchButton } from './refetch-button'
import { ProductHeader } from './product-header'

const COLLAPSE_DURATION = 250
/*
 * Component for products list
 * with open/close and header
 */
export class ProductList extends Component {

    state = {
        opened: getFromStorage(this.props.type, this.props.initialOpen),
        fetched: 0
    }

    handleToggle = _.throttle(() => {
        if (!this.state.fetched) {
            this.props.onListClick()
        }
        this.setState({
            opened: !this.state.opened,
            fetched: true
        }, () => {
            onToggleSection(this.props.type, this.state.opened)
            // кредиты остаются закрытыми
            if (this.props.initialOpen) {
                setToStorage(this.props.type, this.state.opened)
            }
        })
    }, COLLAPSE_DURATION, {})

    handlePreventDefault = (e) => {
        e.preventDefault()
    }

    collapseId = _.uniqueId('menu-')

    render () {
        const {
            children,
            title,
            type,
            newProductUrl,
            newProductTitle,
            linkRedirector,
            refetchStatuses,
            refetchArray,
            refetchMessage
        } = this.props

        const LoaderComponent = _.memoize((props) => <LazyRegion loaderStyle="single" {...props} />)
        const ErrorComponent = _.memoize((otherProps) => (
            <Fragment>
                {otherProps.children}
                <RefetchButton
                    refetchArray={refetchArray}
                    refetchStatuses={refetchStatuses}
                    refetchMessage={refetchMessage}
                    as="div"
                />
            </Fragment>
        ))


        return (
            <ProductsListStyled>
                <ProductHeader
                    title={title}
                    link={newProductUrl}
                    linkRedirector={linkRedirector}
                    onClick={this.handleToggle}
                    onMouseDown={this.handlePreventDefault}
                    opened={this.state.opened}
                    collapseId={this.collapseId}
                    newProductTitle={newProductTitle}
                    type={type}
                />
                <Collapse
                    isOpened={this.state.opened}
                    duration={COLLAPSE_DURATION}
                >
                    <div id={this.collapseId}>
                        <StatusRegion
                            {...this.props}
                            loading={refetchStatuses?.includes(LOADING) && this.state.opened}
                            error={refetchStatuses?.includes(ERROR) && this.state.opened}
                            loaderComponent={LoaderComponent}
                            errorComponent={ErrorComponent}
                            showContentWhileError
                            showContentWhileLoading
                        >
                            { children }
                        </StatusRegion>
                    </div>
                </Collapse>
            </ProductsListStyled>
        )
    }
}

ProductList.displayName = 'ProductList'

ProductList.defaultProps = {
    title: i18next.t('region.scaffold:header'),
    initialOpen: true,
    type: '',
    onListClick: () => {},
    newProductUrl: null,
    newProductTitle: null,
    linkRedirector: false,
    refetchStatuses: [],
    refetchArray: [],
    refetchMessage: {}
}

ProductList.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    initialOpen: PropTypes.bool,
    type: PropTypes.string,
    onListClick: PropTypes.func,
    newProductUrl: PropTypes.string,
    newProductTitle: PropTypes.string,
    linkRedirector: PropTypes.bool,
    refetchStatuses: PropTypes.array,
    refetchArray: PropTypes.array,
    refetchMessage: PropTypes.object
}
