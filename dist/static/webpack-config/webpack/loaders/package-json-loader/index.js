module.exports = function () {
    const modulePath = (this._module && this._module.issuer && this._module.issuer.resource) || 'source file not found'

    throw new Error(`Нельзя импортировать package.json (${modulePath}).
    Для получения имени и версии пакета используйте process.env.PKG_ID и process.env.VERSION соответственно.`)
}
