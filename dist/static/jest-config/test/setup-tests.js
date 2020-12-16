require('jest-enzyme')
require('jest-extended')

const _ = require('lodash')

const { getPkgId, requireConfigurationFile } = require('../utils/setup-utils')

global._ = _
global.matchMedia = () => ({ matches: true })

process.env.NODE_ENV = 'test'
process.env.TESTING = 'true'
process.env.PKG_ID = process.env.PKG_ID || getPkgId()
process.env.TZ = 'Europe/Moscow'

requireConfigurationFile('settings')
requireConfigurationFile('navigation')
