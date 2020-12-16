import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { IconWrapperStyled } from './icon.style'

const iconOmit = ['name']

/**
 * [Zeplin](https://app.zeplin.io/project/5c74ef0d753f3ebccdf8f33d/screen/5f3698dc6a8521646c468cff)
 * Компонент для вывода svg-иконок
 *
 * @param {Object} props - свойства компонента
 * @return {JSX} - компонент
 */
export const Icon = (props) => {

    /**
     * Метод для фиксирования префикса (process.env.PKG_ID) для генерации уникальных id в svg иконках
     * @param projectId
     */
    const { name, namespace, icon } = props

    const addUniqueId = (icon, namespace, name) => useMemo(() => {
        let formattedIcon = icon
        const newIdBase = `${Icon.iconProjectId}::${namespace}/${name}::`
        const refIds = icon?.match(/(id="([^\s"])+")/g)
        if (refIds) {
            refIds.forEach((refId) => {
                const refIdForm = refId.substring(4, refId.length - 1)
                const newId = newIdBase + _.uniqueId()
                formattedIcon = _.replace(formattedIcon, new RegExp(`#${refIdForm}`, 'g'), `#${newId}`)
                formattedIcon = _.replace(formattedIcon, new RegExp(`id="${refIdForm}"`, 'g'), `id="${newId}"`)
            })
        }

        return formattedIcon
    }, [icon, namespace, name])

    const formattedIcon = addUniqueId(icon, namespace, name)

    const passedProps = _(props)
        .omit(iconOmit)
        .extend({
            dangerouslySetInnerHTML: {
                __html: formattedIcon
            }
        })
        .value()

    return <IconWrapperStyled {...passedProps} />
}

Icon.iconProjectId = ''

Icon.setProject = (projectId) => {
    Icon.iconProjectId = projectId
}
