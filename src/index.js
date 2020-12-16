import lottie from 'lottie-web'
import HolyJSON from './Holy.json'

const entry = document.querySelector('.root')

const lottieSettings = {
    container: entry,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: HolyJSON,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMax slice',
        progressiveLoad: true
        
    }
}

window.addEventListener('resize', lottie.resize)

lottie.setQuality('low')
const lottieInstance = lottie.loadAnimation(lottieSettings)
lottieInstance.setSubframe(false)
lottieInstance.play()
