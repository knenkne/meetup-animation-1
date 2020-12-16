// @flow
import { getCommonConfigValue } from '../../configuration/config'
import { getHistory } from '../../configuration/history'
import { getNavigation } from '../../configuration/navigation'
import { i18n } from '../../configuration/i18n'

import style from './style.css'

type TypePage = 'not-found' | 'error-found' | 'network'

type Template = {
    caption: string,
    description: string,
    imgPath: string,
    reloadTitle: string,
    mainTitle: string
}
type ExtraArgs = {
    region: Element
}

const notFoundErrorImagesList = [
    'error-404-cassette',
    'error-404-cd'
]

const template = ({
    caption,
    description,
    imgPath,
    reloadTitle,
    mainTitle
}: Template) => {
    const article = document.createElement('article')

    article.className = style.wrapper
    article.innerHTML = `
    <div class=${style.image}>
    <img
    src="${imgPath}.png"
    srcSet="${imgPath}_2x.png 2x, ${imgPath}_3x.png 3x"
    role="presentation"
    alt=""
    >
    </div>
    <div role="alert" aria-relevant="all">
    <h1>
    ${caption}
    </h1>
    <p>
    ${description}
    </p>
    </div>`

    if (reloadTitle) {
        const reloadButton = document.createElement('button')
        reloadButton.className = style.button
        reloadButton.setAttribute('type', 'button')
        reloadButton.addEventListener('click', () => {
            window.location.reload()
        })
        reloadButton.innerHTML = reloadTitle
        article.appendChild(reloadButton)
    }

    if (mainTitle && getNavigation().index) {
        const mainButton = document.createElement('a')
        mainButton.className = style.button
        mainButton.setAttribute('href', getNavigation().index)
        mainButton.addEventListener('click', (event) => {
            event.preventDefault()
            getHistory().push(getNavigation().index)
        })
        mainButton.innerHTML = mainTitle
        article.appendChild(mainButton)
    }

    return article
}

const createErrorPage = (typePage: TypePage = 'not-found', imgPath) => {
    switch (typePage) {
        case 'network':
            return template({
                imgPath,
                caption: i18n.t('network.error.title'),
                description: i18n.t('network.error.description'),
                reloadTitle: i18n.t('try.again')
            })
        case 'not-found':
            return template({
                imgPath,
                caption: i18n.t('404.error.title'),
                description: i18n.t('404.error.description'),
                mainTitle: i18n.t('return.title')
            })
        case 'error-found':
            return template({
                imgPath,
                caption: i18n.t('main.error.title'),
                description: i18n.t('main.error.description'),
                mainTitle: i18n.t('return.title')
            })
        default:
            return console.error('Unknown page type')
    }
}

const prefetchImage = (imgPath) => {
    const prefetchLink = document.createElement('link')
    prefetchLink.href = imgPath
    prefetchLink.rel = 'prefetch'
    prefetchLink.as = 'image'
    document.head.appendChild(prefetchLink)
}

const getRandomNumber = (min = 0, max = 1) => Math.floor(Math.random() * (max - min)) + min

const getRandomImage = (images) => {
    const amountOfImages = images.length
    const pictureIndex = getRandomNumber(0, amountOfImages)

    return images[pictureIndex]
}

export const factoryTemplatePage = (typePage: TypePage) => {
    // На случай потери или переменного интернета лениво загружаем картинки страниц ошибок
    const mainPath = `${getCommonConfigValue('res.url')}/common/${getCommonConfigValue('common.version')}/img/errors/`
    const imgPath = `${mainPath}${(typePage === 'not-found' ? getRandomImage(notFoundErrorImagesList) : 'error')}`

    if (window.devicePixelRatio >= 2 && window.devicePixelRatio < 3) {
        prefetchImage(`${imgPath}_2x.png`)
    } else if (window.devicePixelRatio >= 3) {
        prefetchImage(`${imgPath}_3x.png`)
    } else {
        prefetchImage(`${imgPath}.png`)
    }

    return {
        default () {
            return createErrorPage(typePage, imgPath)
        },

        mount (element: Element, extraArgs: ExtraArgs) {
            if (extraArgs.region) {
                while (extraArgs.region.firstChild) {
                    extraArgs.region.removeChild(extraArgs.region.firstChild)
                }
            }
            extraArgs.region.appendChild(element)
        },

        unmount (extraArgs: ExtraArgs) {
            if (extraArgs.region) {
                while (extraArgs.region.firstChild) {
                    extraArgs.region.removeChild(extraArgs.region.firstChild)
                }
            }
        }
    }
}
