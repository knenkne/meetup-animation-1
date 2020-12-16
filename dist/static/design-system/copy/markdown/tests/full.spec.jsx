import React from 'react'
import { shallow } from 'enzyme'

import { Full } from '../full'
import externalIcon from '../../icon/common/external.svg'

describe('<Markdown.Full />', () => {
    it('рендерит div с контентом', () => {
        const content = `# Заголовок

параграф

параграф`
        const wrapper = shallow(<Full content={content} />)
        const container = wrapper.find('div[data-unit="markdown:full"]')
        expect(container.length).toBe(1)
        expect(container.at(0).props().dangerouslySetInnerHTML.__html).toBe('<h1>Заголовок</h1>\n<p>параграф</p>\n<p>параграф</p>\n')
    })

    it('формирует внутреннюю ссылку', () => {
        const content = '[Link Internal](/payments)'
        const wrapper = shallow(<Full content={content} />)
        const container = wrapper.find('div[data-unit="markdown:full"]')

        expect(container.at(0).props().dangerouslySetInnerHTML.__html).toBe(
            '<p><a href="/payments"><span>Link Internal</span></a></p>\n'
        )
    })

    it('формирует внешнюю ссылку', () => {
        const content = '[Link External](http://ya.ru)'
        const wrapper = shallow(<Full content={content} />)
        const container = wrapper.find('div[data-unit="markdown:full"]')

        expect(container.at(0).props().dangerouslySetInnerHTML.__html).toBe(
            `<p><a href="http://ya.ru" target="_blank" rel="noopener noreferrer"><span>Link </span><span>External${externalIcon}</span></a></p>\n`
        )
    })

    it('формирует внешнюю ссылку 2', () => {
        const content = '[External](http://ya.ru)'
        const wrapper = shallow(<Full content={content} />)
        const container = wrapper.find('div[data-unit="markdown:full"]')

        expect(container.at(0).props().dangerouslySetInnerHTML.__html).toBe(
            `<p><a href="http://ya.ru" target="_blank" rel="noopener noreferrer"><span>External${externalIcon}</span></a></p>\n`
        )
    })
})
