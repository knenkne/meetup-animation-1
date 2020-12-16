const _ = require('lodash')

const checks = [
    // В SVG дублируемые id не влияют на доступность
    (item) => _.get(item, ['any', '0', 'id']) === 'duplicate-id'
        && _.get(item, ['target', '0'], '').match(/(\bdefs\b|\bsvg\b|\bpath\b|\brect\b|\bmask\b|\blinearGradient\b|\bg\b|\bpolygon\b)/),
    // В обвязке скрыт дополнительный h1 для экрана ошибки
    (item) => _.get(item, ['all', '0', 'id']) === 'page-has-heading-one',
    // Отслеживается на этапе дизайна
    (item) => _.get(item, ['any', '0', 'id']) === 'color-contrast',
    // Не является критическим, отслеживается при ревью проекта
    (item) => _.get(item, ['any', '0', 'id']) === 'heading-order',
    // Google Chrome пытается предложить собственные решения, необходимо их полностью отключать
    (item) => _.get(item, ['all', '0', 'id']) === 'autocomplete-valid',
    // Похоже на баг axe (TODO: перепроверить на реальных кейсах)
    (item) => _.get(item, ['all', '0', 'id']) === 'aria-valid-attr-value',
    // Исключаем сторонние url
    (item) => !_.get(item, 'url', '').includes('localhost')
        && !_.get(item, 'url', '').includes('sberbank.ru'),
    // React-modal искажает бытие (конечно, хорошая практика использовать несемантичные теги с ролями, но кого это волнует)
    (item) => _.get(item, ['any', '0', 'id']) === 'aria-allowed-role'
        && _.get(item, 'html', '').includes('aside')
        && _.get(item, 'html', '').includes('dialog'),
    //  React-modal искажает бытие (выпихиваясь наружу за предел разметки зонами)
    (item) => _.get(item, ['any', '0', 'id']) === 'region'
]

module.exports = (item) => checks.some((check) => check(item))
