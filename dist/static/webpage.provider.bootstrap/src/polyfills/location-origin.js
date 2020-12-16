/* eslint-disable prefer-destructuring, comment: Needs ES5 for IE */
/* eslint-disable vars-on-top, comment: Needs ES5 for IE */
/* eslint-disable no-var, comment: Needs ES5 for IE */
/* eslint-disable prefer-template, comment: Needs ES5 for IE */

if (!window.location.origin) {
    var protocol = window.location.protocol
    var hostname = window.location.hostname
    var port = window.location.port

    window.location.origin = protocol + '//' + hostname + (port ? ':' + port : '')
}
