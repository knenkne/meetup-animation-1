module.exports = {
    'base.url': '/sbtsbol',
    'mapi.url': '/clientapi',
    'erib.url': `http://localhost:${process.env.PORT || '4242'}/ERIB`,
    'base.client.url': '',
    'ufs.block.root.url': `http://localhost:${process.env.PORT || '4242'}/UFS`,
    'log.level': 'DEBUG'
}
