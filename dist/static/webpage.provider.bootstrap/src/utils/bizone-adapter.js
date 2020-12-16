const redefineBizoneApi = () => {
    window.encode_deviceprint = window.bfd.getEncodedData
    window.add_deviceprint = window.bfd.getData

    /* eslint-disable */
    window.urlEncode = (b) => encodeURIComponent(b)
        .replace(/\~/g, '%7E')
        .replace(/\!/g, '%21')
        .replace(/\*/g, '%2A')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\'/g, '%27')
        .replace(/\-/g, '%2D')
        .replace(/\_/g, '%5F')
        .replace(/\./g, '%2E')
    /* eslint-enable */
}

export const bizoneAdapter = () => {
    if (window.bfd && window.bfd.getEncodedData && window.bfd.getData) {
        redefineBizoneApi()

        XMLHttpRequest.prototype.wrappedSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader
        XMLHttpRequest.prototype.setRequestHeader = function setRequestHeader(header, value) {
            if (header === 'RSA-Antifraud-JS-Events' && value) {
                redefineBizoneApi()
                this.wrappedSetRequestHeader(header, '')
            } else if (header === 'RSA-Antifraud-DOM-Elements' && value) {
                redefineBizoneApi()
                this.wrappedSetRequestHeader(header, '')
            } else if (header === 'RSA-Antifraud-Device-Print' && value.includes('version%3D3%2E4%2E2%2E0%5F1')) {
                redefineBizoneApi()
                this.wrappedSetRequestHeader(header, window.encode_deviceprint())
            } else {
                this.wrappedSetRequestHeader(header, value)
            }
        }
    }
}
