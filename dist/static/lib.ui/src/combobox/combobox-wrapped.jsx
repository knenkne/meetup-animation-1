import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Combobox } from './combobox'

const omitProps = ['onChange', 'options']

export class ComboboxWrapped extends React.Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        /**
         * Справочник подстановки
         */
        options: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            value: PropTypes.string.isRequired,
            icon: PropTypes.string
        }))
    }

    static defaultProps = {
        options: [],
    }

    state = {
        filtered: this.props.options
    }

    getFiltered = (options, query) => {
        if (!query) {
            return []
        }
        const formattedQuery = query.toLowerCase()
        return _.filter(options, (option) => _.startsWith(option.title?.toLowerCase(), formattedQuery))
    }

    handleChangeInput = (query) => {
        const { onChange, options } = this.props

        if (options) {
            this.setState({
                filtered: this.getFiltered(options, query)
            })
        }

        onChange({ query })
    }

    handleChangeOption = (value, query) => {
        const { onChange } = this.props

        onChange({ value, query })
    }

    render () {
        const { filtered } = this.state

        return (
            <Combobox
                onChangeOption={this.handleChangeOption}
                onChangeInput={this.handleChangeInput}
                options={filtered}
                {..._.omit(this.props, omitProps)}
            />
        )
    }
}


export default ComboboxWrapped
