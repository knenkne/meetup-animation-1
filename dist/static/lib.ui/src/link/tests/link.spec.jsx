import React from 'react'
import { shallow, mount } from 'enzyme'

import { Link } from '../link'
import { Icon } from '../../icon'

describe('<Link />', () => {
    it('to be available', () => {
        expect(Link).toBeDefined()
    })

    it('render internal link with mode', () => {
        const wrapper = shallow(<Link external={false} href="#" />)
        expect(wrapper.find(Icon).length).toBe(0)

        const wrapper2 = shallow(<Link external={false} href="#" mode="file:word" />)
        expect(wrapper2.find(Icon).prop('name')).toBe('icon:core/common/file:word')
    })

    it('render external link', () => {
        const wrapper = shallow(<Link external href="https://" />)
        expect(wrapper.find('a').first().prop('target')).toBe('_blank')
        expect(wrapper.find('a').first().prop('rel')).toBe('noopener noreferrer')
        expect(wrapper.find(Icon).first().prop('name')).toBe('icon:core/common/external')
    })

    it('render internal link with mode', () => {
        const wrapper = shallow(<Link external={false} href="/someone" />)
        expect(wrapper.find('a').prop('target')).not.toBe('_blank')
        expect(wrapper.find('a').prop('rel')).not.toBe('noopener noreferrer')
        expect(wrapper.find('a').prop('href').indexOf('/someone')).toBeGreaterThan(-1)
        expect(wrapper.find(Icon).length).toBe(0)

        const wrapper2 = shallow(<Link external={false} href="/someone" mode="file:word" />)
        expect(wrapper2.find(Icon).first().prop('name')).toBe('icon:core/common/file:word')
    })

    it('рендерит внутреннюю ссылку по хэшу', () => {
        const wrapper = shallow(<Link external={false} href="#hello" />)
        expect(wrapper.find('a').prop('href').indexOf('#hello')).toBeGreaterThan(-1)
    })

    it('рендерит bold ссылку', () => {
        const wrapper = shallow(<Link bold href="#" />)
        expect(wrapper.hasClass(Link.theme.linkBold)).toBeTruthy()
    })

    it('рендерит прстую икону external', () => {
        const wrapper = shallow(<Link external href="#" />)
        expect(wrapper.find(Icon).prop('name')).toBe('icon:core/common/external')
    })

    it('рендерит bold икону external', () => {
        const wrapper = shallow(<Link external bold href="#" />)
        expect(wrapper.find(Icon).prop('name')).toBe('icon:core/common/externalBold')
    })
    it('создает обертку вокруг иконки и последнего слова во внешней ссылке', () => {
        const component = mount(<Link external href="#">{'Внешняя ссылка'}</Link>)

        expect(component).toMatchSnapshot()
    })

    it('создает обертку вокруг иконки и единственного слова во внешней ссылке', () => {
        const component = mount(<Link external href="#">{'Cсылка'}</Link>)

        expect(component).toMatchSnapshot()
    })
})
