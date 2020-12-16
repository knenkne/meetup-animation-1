const next = {
    cmd: 'EVENT',
    name: 'next',
    title: 'Продолжить'
}

const skip = {
    cmd: 'EVENT',
    name: 'skip',
    title: 'Пропустить'
}

const rollback = {
    cmd: 'ROLLBACK',
    title: 'Назад'
}

const exit = {
    cmd: 'EXIT',
    title: 'Покинуть процесс'
}

const abort = {
    cmd: 'ABORT',
    title: 'Отменить процесс'
}

module.exports = {
    next,
    skip,
    rollback,
    exit,
    abort
}
