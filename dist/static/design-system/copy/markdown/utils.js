/* eslint-disable camelcase, comment: кейсинг предоставляет Remarkable */
import _ from 'lodash'
import Remarkable from 'remarkable'
import { escapeHtml, replaceEntities } from 'remarkable/lib/common/utils'

import externalIcon from '../icon/common/external.svg'

const options = {
    html: false,
    xhtmlOut: false,
    breaks: false,
    langPrefix: 'language-',
    linkify: false,
    typographer: true,
    quotes: '«»‘’'
}

const internalTestRegExp = /^[#./]/
const lastWorldRegExp = /[^ ]*$/

export const isExternalUrl = (url = '') =>
    !!url && !internalTestRegExp.test(url)

export const emOpen = () => '<strong>'
export const emClose = () => '</strong>'

export const linkOpen = (tokens, idx) => {
    const href = escapeHtml(tokens[idx].href)
    const isExternal = isExternalUrl(href)
    const title = tokens[idx].title
        ? ` title="${escapeHtml(replaceEntities(tokens[idx].title))}"`
        : ''

    if (!isExternal) {
        return `<a href="${href}"${title}><span>`
    }

    const externals = ' target="_blank" rel="noopener noreferrer"'
    const content = escapeHtml(tokens[idx + 1].content)
    const droppedLast = content.replace(lastWorldRegExp, '')

    return `<a href="${href}"${title}${externals}>${droppedLast ? '<span>' : ''}`
}

export const linkClose = (tokens, idx) => {
    const href = escapeHtml(tokens[idx - 2].href) // eslint-disable-line no-magic-numbers, comment: приходят все токены, а href лежит в два токена слева: <a> и текст
    if (!isExternalUrl(href)) {
        return '</span></a>'
    }

    const content = escapeHtml(tokens[idx - 1].content)
    const droppedLast = content.replace(lastWorldRegExp, '')
    const lastWord = content.match(lastWorldRegExp)[0]

    return `${droppedLast ? '</span>' : ''}<span>${lastWord}${externalIcon}</span></a>`
}

export const text = (tokens, idx) => {
    const content = escapeHtml(tokens[idx].content)
    const href = escapeHtml(tokens[idx - 1]?.href)

    if (!isExternalUrl(href)) {
        return content
    }

    return content.replace(lastWorldRegExp, '')
}

const inlineDisable = [
    'backticks',
    'del',
    'ins',
    'mark',
    'footnote_inline',
    'footnote_ref'
]
const blockDisable = ['blockquote', 'code', 'fences']
const blockDisableAdditional = ['deflist', 'table']

export const markdownFull = new Remarkable('full', options)

markdownFull.inline.ruler.disable(inlineDisable)
markdownFull.block.ruler.disable(blockDisable)
markdownFull.renderer.rules.link_open = linkOpen
markdownFull.renderer.rules.link_close = linkClose
markdownFull.renderer.rules.em_open = emOpen
markdownFull.renderer.rules.em_close = emClose
markdownFull.renderer.rules.text = text

export const markdownShort = new Remarkable('full', options)

markdownShort.inline.ruler.disable(inlineDisable)
markdownShort.block.ruler.disable(blockDisable.concat(blockDisableAdditional))
markdownShort.renderer.rules.link_open = linkOpen
markdownShort.renderer.rules.link_close = linkClose
markdownShort.renderer.rules.em_open = emOpen
markdownShort.renderer.rules.em_close = emClose
markdownShort.renderer.rules.text = text

// ignores images completely
markdownShort.renderer.rules.image = _.stubString
