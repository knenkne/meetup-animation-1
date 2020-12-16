import React from 'react'
import i18next from 'i18next'
import { Application } from '@sbol/lib.app/src/application'
import { Region } from '@sbol/lib.app/src/region'
import { Background } from '@sbol/lib.ui/core/background'
import { Button } from '@sbol/lib.ui/core/button'
import { Input } from '@sbol/lib.ui/core/input'
import { Selection } from '@sbol/lib.ui/core/selection'

import style from './style.css'

Region.__importFunc = () => import('../src')

const handleInit = async () => {
    const regionOffersAPI = await Region.import('region.offers')

    if (regionOffersAPI.init) {
        await regionOffersAPI.init(process.env.PKG_ID)
        alert('done')
    }
}
const opened = async () => {
    const regionOffersAPI = await Region.import('region.offers')

    if (regionOffersAPI.feedback) {
        regionOffersAPI.feedback.opened()
    }
}
const done = async () => {
    const regionOffersAPI = await Region.import('region.offers')

    if (regionOffersAPI.feedback) {
        regionOffersAPI.feedback.done()
    }
}
const reject = async (contentIds) => {
    const regionOffersAPI = await Region.import('region.offers')

    if (regionOffersAPI.reject) {
        regionOffersAPI.reject(contentIds)
    }
}

export const Dashboard = () => {
    const [contentIds, handleChangeContentIds] = React.useState('')
    const [viewCarousel, toggleCarouselView] = React.useState(true)
    const [viewBigBlocks, toggleBigBlocks] = React.useState(true)
    const [viewSmallBlocks, toggleSmallBlocks] = React.useState(true)
    const [viewShowcase, toggleShowcase] = React.useState(true)

    const handleToggleCarouselView = React.useCallback(() => {
        toggleCarouselView(!viewCarousel)
    }, [viewCarousel])
    const handleToggleBigBlocksView = React.useCallback(() => {
        toggleBigBlocks(!viewBigBlocks)
    }, [viewBigBlocks])
    const handleToggleSmallBlocksView = React.useCallback(() => {
        toggleSmallBlocks(!viewSmallBlocks)
    }, [viewSmallBlocks])
    const handleToggleShowcase = React.useCallback(() => {
        toggleShowcase(!viewShowcase)
    }, [viewShowcase])

    const handleSetContentId = React.useCallback((event) => {
        handleChangeContentIds(event.target.value)
    }, [])

    const handleReject = React.useCallback(() => {
        reject(contentIds.split(','))
    }, [contentIds])

    return (
        <Application
            name={process.env.PKG_ID}
            version={process.env.VERSION}
            libs={process.env.LIBS}
            locales={process.env.LOCALES}
            i18next={i18next}
        >
            {viewCarousel && (
                <Background>
                    <Region
                        name="region.offers"
                        props={{
                            as: 'Catalog',
                            app: process.env.PKG_ID
                        }}
                    />
                </Background>
            )}

            {viewShowcase && (
                <React.Fragment>
                    <p>
                        {'Остаточный контент для наглядности. Остаточный контент для наглядности.'}
                    </p>

                    <div className={style.wrapper}>
                        <Region
                            name="region.offers"
                            props={{
                                as: 'Showcase',
                                app: process.env.PKG_ID,
                                onCountChange: (count) => console.dir(`Выводится баннеров: ${count}`)
                            }}
                        />
                    </div>
                </React.Fragment>
            )}

            {viewBigBlocks && (
                <React.Fragment>
                    <p>
                        {'Остаточный контент для наглядности. Остаточный контент для наглядности.'}
                    </p>

                    <div className={style.wrapper}>
                        <Region
                            name="region.offers"
                            props={{
                                as: 'CrossSale',
                                mode: 'big',
                                app: process.env.PKG_ID
                            }}
                        />
                    </div>
                </React.Fragment>
            )}

            {viewSmallBlocks && (
                <React.Fragment>
                    <p>
                        {'Остаточный контент для наглядности. Остаточный контент для наглядности.'}
                    </p>

                    <div className={style.wrapper}>
                        <Region
                            name="region.offers"
                            props={{
                                as: 'CrossSale',
                                mode: 'small',
                                app: process.env.PKG_ID
                            }}
                        />
                    </div>
                </React.Fragment>
            )}

            <p>
                {'Остаточный контент для наглядности. Остаточный контент для наглядности.'}
            </p>


            <Selection.Group>
                <Selection.Checkbox onClick={handleToggleCarouselView} checked={viewCarousel}>
                    {'Карусель баннеров в шапке страницы'}
                </Selection.Checkbox>
                <Selection.Checkbox onClick={handleToggleBigBlocksView} checked={viewBigBlocks}>
                    {'Большие блоки баннеров'}
                </Selection.Checkbox>
                <Selection.Checkbox onClick={handleToggleSmallBlocksView} checked={viewSmallBlocks}>
                    {'Маленькие блоки баннеров'}
                </Selection.Checkbox>
                <Selection.Checkbox onClick={handleToggleShowcase} checked={viewShowcase}>
                    {'Баннеры для витрин'}
                </Selection.Checkbox>
            </Selection.Group>


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
        </Application>
    )
}
