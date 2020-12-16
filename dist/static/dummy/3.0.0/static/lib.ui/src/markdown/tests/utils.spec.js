import Remarkable from 'remarkable'
import _ from 'lodash'

import {
    markdownFull,
    markdownShort,
    linkOpen,
    linkClose,
    text,
    emOpen,
    emClose,
    replaceNbsp
} from '../utils'
import externalIcon from '../../icon/common/external.svg'

const nbsp = '\u00a0'

describe('<Markdown /> - utils', () => {
    it('emOpen - формирование открывающего тега <strong />', () => {
        expect(emOpen()).toBe('<strong>')
    })
    it('linkOpen - формирование закрывающего тега <strong />', () => {
        expect(emClose()).toBe('</strong>')
    })
    it('linkOpen - формирование открывающего тега <a />', () => {
        expect(linkOpen([{ href: '#', title: 'title' }], 0)).toBe(
            '<a href="#" title="title"><span>'
        )

        expect(
            linkOpen(
                [{ href: 'https://www.1.ru' }, { content: 'External Link' }], 0
            )
        ).toBe(
            '<a href="https://www.1.ru" target="_blank" rel="noopener noreferrer"><span>'
        )

        expect(
            linkOpen(
                [{ href: 'https://www.1.ru' }, { content: 'External' }], 0
            )
        ).toBe(
            '<a href="https://www.1.ru" target="_blank" rel="noopener noreferrer">'
        )
    })
    it('linkClose - формирование закрывающего тега <a />', () => {
        expect(linkClose([{ href: '#' }], 2)).toBe('</span></a>')

        expect(
            linkClose(
                [{ href: 'https://www.1.ru' }, { content: 'External Link' }], 2
            )
        ).toBe(`</span><span>Link${externalIcon}</span></a>`)

        expect(
            linkClose(
                [{ href: 'https://www.1.ru' }, { content: 'External' }], 2
            )
        ).toBe(`<span>External${externalIcon}</span></a>`)
    })

    it('text - формирование контента ссылки', () => {
        expect(text([{ href: '#' }, { content: 'Internal Link' }], 1)).toBe('Internal Link')
        expect(text([{ href: '#' }, { content: `Internal${nbsp}Link` }], 1)).toBe(`Internal${nbsp}Link`)
        expect(text([{ href: 'https://www.1.ru' }, { content: 'External Link' }], 1)).toBe('External ')
        expect(text([{ href: 'https://www.1.ru' }, { content: `External${nbsp}Link` }], 1)).toBe(`External${nbsp}`)
        expect(text([{ href: 'https://www.1.ru' }, { content: 'External' }], 1)).toBe('')
    })

    it('Заменяется символ неразрывного пробела на html', () => {
        const rem = {
            src: `text text${nbsp}text`
        }

        replaceNbsp(rem)
        expect(rem).toEqual({ src: 'text text&nbsp;text' })
    })

    it('Создаются MD экземпляры для Full формата markdown', () => {
        expect(markdownFull).toBeDefined()
        expect(typeof markdownFull).toBe('object')
        expect(markdownFull instanceof Remarkable).toBe(true)
        expect(markdownFull.renderer.rules.link_open).toBe(linkOpen)
        expect(markdownFull.renderer.rules.link_close).toBe(linkClose)
        expect(markdownFull.renderer.rules.em_open).toBe(emOpen)
        expect(markdownFull.renderer.rules.em_close).toBe(emClose)
    })

    it('Создаются MD экземпляры для Short формата markdown', () => {
        expect(markdownShort).toBeDefined()
        expect(typeof markdownShort).toBe('object')
        expect(markdownShort instanceof Remarkable).toBe(true)
        expect(markdownShort.renderer.rules.link_open).toBe(linkOpen)
        expect(markdownShort.renderer.rules.link_close).toBe(linkClose)
        expect(markdownShort.renderer.rules.em_open).toBe(emOpen)
        expect(markdownShort.renderer.rules.em_close).toBe(emClose)
        expect(markdownShort.renderer.rules.image).toBe(_.stubString)
    })

    it('markdownFull, markdownShort создают html-строку и не уничтожают неразрывные пробелы', () => {
        expect(markdownFull.render(`# Заголовок\n\nпараграф${nbsp}текст`)).toBe(
            `<h1>Заголовок</h1>\n<p>параграф${nbsp}текст</p>\n`
        )
        expect(markdownShort.render(`# Заголовок\n\nпараграф${nbsp}текст`)).toBe(
            `<h1>Заголовок</h1>\n<p>параграф${nbsp}текст</p>\n`
        )
    })
})
