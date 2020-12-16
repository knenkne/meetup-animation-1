import { i18n } from '../../configuration/i18n'

import style from './global-loader.css'

export class GlobalLoader {
    loader
    progress
    percent
    interval

    constructor () {
        this.createLoader()
    }

    createLoader () {
        const loader = document.createElement('div')

        loader.classList.add(style.anim, style.loader, style.hidden)
        loader.classList.add(style.hidden)

        const progress = document.createElement('div')

        progress.classList.add(style.progress)

        progress.setAttribute('role', 'status')

        loader.appendChild(progress)

        document.body.appendChild(loader)

        this.loader = loader
        this.progress = progress
    }

    crateSetInterval () {
        return setInterval(() => this.setPercent(this.percent + 5), 2000)
    }

    setPercent (percent) {
        if (percent > 100) {
            this.stop()
            return false
        }

        if (percent < this.percent) {
            this.progress.classList.remove(style.smooth)
        } else {
            this.progress.classList.add(style.smooth)
        }

        this.progress.style.width = `${percent}%`
        this.percent = percent
        return true
    }

    start (percent) {
        if (percent) {
            this.setPercent(percent)
        }
        this.progress.setAttribute('aria-label', i18n.t('global.loader.start.label'))

        this.loader.classList.remove(style.hidden)
        this.interval = this.crateSetInterval()
    }

    stop () {
        this.setPercent(100)
        this.progress.setAttribute('aria-label', i18n.t('global.loader.stop.label'))

        this.loader.classList.add(style.absolute)
        this.loader.classList.remove(style.anim)

        clearInterval(this.interval)
    }

    isVisible () {
        return Boolean(Number(this.loader.style.opacity))
    }
}
