export const checkHtmlCodes = (str = '') => {
    const el = document.createElement('div')
    el.innerHTML = str
    const decodedStr = el.innerText

    return decodedStr
}
