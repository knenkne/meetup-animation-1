const userProperties = require('../api/jsons/private/userProperties.do.theme')
const getManagerInfoDo = require('../api/jsons/private/getManagerInfo/cm')
const profileInfoDo = require('../api/jsons/private/profile/info.do')

module.exports = {
    'region.products': {
        profile: {
            region: { id: 0, name: 'Все регионы' },
            surName: 'П.',
            firstName: 'Клиент',
            patrName: 'Михайлович'
        },
    },
    'userProperties.do': userProperties,
    'getManagerInfo.do': getManagerInfoDo,
    'profile/info.do': profileInfoDo
}
