import React from 'react'
import { Button, Background, Input } from '@sbol/lib.ui'

import { OffersCarousel, OffersBlocks, feedback, init, reject } from '../src'

import style from './style.css'

const opened = () => feedback.opened()
const done = () => feedback.done()
const handleInit = () => init('catalog')

export const MainPage = () => {
    const [contentIds, handleChangeContentIds] = React.useState('')
    const [viewCarousel, toggleView] = React.useState(true)
    const [blocksMode, changeMode] = React.useState('big')

    const handleToggleView = React.useCallback(() => {
        toggleView(!viewCarousel)
    }, [viewCarousel])

    const handleChangeMode = React.useCallback(() => {
        if (blocksMode === 'big') {
            changeMode('small')
        } else {
            changeMode('big')
        }

    }, [blocksMode])

    const handleSetContentId = React.useCallback((event) => {
        handleChangeContentIds(event.target.value)
    }, [])

    const handleReject = React.useCallback(() => {
        reject(contentIds.split(','))
    }, [contentIds])

    return (
        <React.Fragment>
            {viewCarousel ? (
                <Background>
                    <OffersCarousel
                        app="catalog"
                    />
                </Background>
            ) : (
                <React.Fragment>
                    <p>
                        {'Остаточный контент для наглядности. Остаточный контент для наглядности.'}
                    </p>

                    <div className={style.wrapper}>
                        <OffersBlocks
                            app="catalog"
                            mode={blocksMode}
                        />
                    </div>
                </React.Fragment>
            )}

            <p>
                {'Остаточный контент для наглядности. Остаточный контент для наглядности.'}
            </p>

            {!viewCarousel && (
                <div className={style.wrapper}>
                    <Button onClick={handleChangeMode}>
                        {'Сменить вид баннеров'}
                    </Button>
                </div>
            )}

            <div className={style.wrapper}>
                <Button onClick={handleToggleView}>
                    {'Сменить отображение баннеров'}
                </Button>
            </div>


            <div className={style.wrapper}>
                <Button onClick={opened}>
                    {'Отправить отклик о выборе с витрины'}
                </Button>
            </div>
            <div className={style.wrapper}>
                <Button onClick={done}>
                    {'Отправить отклик о завершении заявки'}
                </Button>
            </div>

            <div className={style.wrapper}>
                <Button onClick={handleInit}>
                    {'Разогрев места показа'}
                </Button>
            </div>


            <div className={style.wrapper}>
                <Input
                    onChange={handleSetContentId}
                    value={contentIds}
                />
            </div>
            <div className={style.wrapper}>
                <Button onClick={handleReject}>
                    {'Запомнить предложение и больше не показывать его (по contentId)'}
                </Button>
            </div>
        </React.Fragment>
    )
}
