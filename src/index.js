import lottie from 'lottie-web'
import HolyJSON from './Holy.json'

const entry = document.querySelector('.root')

const lottieSettings = {
    container: entry,
    renderer: 'canvas',
    loop: false,
    autoplay: false,
    animationData: HolyJSON,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        progressiveLoad: true
        
    }
}

window.addEventListener('resize', lottie.resize)

const lottieInstance = lottie.loadAnimation(lottieSettings)
lottieInstance.play()
