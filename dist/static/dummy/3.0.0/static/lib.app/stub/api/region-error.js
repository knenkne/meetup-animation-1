/* eslint-disable */
define([], function () {
    throw new Error('Sorry!')

    return {
        default: function () {
            return document.createElement('div')
        },
        mount: function (component, params) {
            component.innerHTML = 'Hello, I\'m region!'
            params.region.appendChild(component)
        },
        unmount: function (params) {
            params.region.childNodes.forEach(function (node) {
                params.region.removeChild(node)
            })
        }
    }
})
