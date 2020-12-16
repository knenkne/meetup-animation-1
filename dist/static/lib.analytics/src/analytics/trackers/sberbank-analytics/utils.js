export const sendValueToRambler = (value) => {
    const image = document.createElement('img')
    image.width = 1
    image.height = 1
    image.style.display = 'none'
    image.src = `//sync.rambler.ru/set?partner_id=sberbank&id=${value}`
    document.body.insertBefore(image, document.body.firstChild)
}
