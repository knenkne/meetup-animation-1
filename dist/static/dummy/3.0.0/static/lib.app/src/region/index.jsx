/* eslint-disable no-undef, comment: System является глобальной переменной и устанавливается в webpage.provider.bootstrap */
import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'

import { log } from '../log'
import { getAllLauncher } from '../config'

export const Region = ({ loader: Loader, error: Error, name, props }) => {
    const regionElement = useRef(null)
    const [regionLoaded, setRegionLoaded] = useState(false)
    const [regionError, setRegionError] = useState(false)

    if (!System) {
        log.error(new Error('Failed to load the module. System Not Found'))
        return null
    }

    const version = getAllLauncher(name)?.version

    // Если версии нет в Launcher, то скрываем блок
    if (!version) {
        log.info(`No active version was found for "${name}" module region`)
        return null
    }

    useEffect(() => {
        // Формируем путь до региона
        const pathToRegion = `${name}/${version}/index.js`

        let region = {}

        Region.__importFunc(pathToRegion)
            .then(async (ownRegion) => {
                // Если компонент уже размонтирован, то ничего не делаем
                if (regionElement.current) {
                    // TODO: возможно за состояние монтирования может отвечать существование regionElement

                    const component = await ownRegion.default(props)
                    await ownRegion.mount(component, { region: regionElement.current })
                    setRegionLoaded(true)
                }

                region = ownRegion
            })
            .catch((error) => {
                log.error(error, 'Failed to load the module by Region')
                setRegionError(true)
            })

        return () => {
            if (region?.unmount) {
                region.unmount({ region: regionElement.current })
            }
        }
    }, [])

    const regionAnchor = useMemo(() => <div ref={regionElement} />, [])

    return (
        <>
            {regionError && Error && <Error />}
            {!regionLoaded && !regionError && Loader && <Loader />}
            {regionAnchor}
        </>
    )
}

Region.propTypes = {
    loader: PropTypes.elementType,
    error: PropTypes.elementType,
    name: PropTypes.string.isRequired,
    props: PropTypes.object
}

Region.defaultProps = {
    loader: void 0,
    error: void 0,
    props: {}
}

Region.__importFunc = (pathToRegion) => System.import(pathToRegion)

Region.import = async (name) => {
    const version = getAllLauncher(name)?.version

    // Если версии нет в Launcher, то не возвращаем API
    if (!version) {
        log.info(`No active version was found for "${name}" module region`)
        return null
    }

    const pathToRegion = `${name}/${version}/index.js`

    try {
        return await Region.__importFunc(pathToRegion)
    } catch (error) {
        log.error(error, 'Failed to load the module by Region.import')
        throw error
    }
}
