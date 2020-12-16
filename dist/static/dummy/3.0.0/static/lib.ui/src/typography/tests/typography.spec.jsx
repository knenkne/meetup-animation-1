import React from 'react'
import { shallow } from 'enzyme'

import { Typography } from '..'

describe('Typography', () => {
    describe('Headline', () => {
        it('is available', () => {
            expect(Typography.Headline).toBeDefined()
        })

        it('renders children', () => {
            const wrapper = shallow(
                <Typography.Headline>
                    <span>{'foo bar baz'}</span>
                </Typography.Headline>
            )

            expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
        })
    })

    describe('Title', () => {
        it('is available', () => {
            expect(Typography.Title).toBeDefined()
        })

        it('renders children', () => {
            const wrapper = shallow(
                <Typography.Title>
                    <span>{'foo bar baz'}</span>
                </Typography.Title>
            )

            expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
        })

        it('renders colorScheme', () => {
            const wrapper = shallow(<Typography.Title colorScheme="orange" />)
            expect(wrapper.hasClass(Typography.theme.orange)).toBeTruthy()
        })
    })

    describe('Subheader', () => {
        it('is available', () => {
            expect(Typography.Subheader).toBeDefined()
        })

        it('renders children', () => {
            const wrapper = shallow(
                <Typography.Subheader>
                    <span>{'foo bar baz'}</span>
                </Typography.Subheader>
            )

            expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
        })

        it('renders colorScheme', () => {
            const wrapper = shallow(<Typography.Subheader colorScheme="white" />)
            expect(wrapper.hasClass(Typography.theme.white)).toBeTruthy()
        })
    })

    describe('Uppercase', () => {
        it('is available', () => {
            expect(Typography.Uppercase).toBeDefined()
        })

        it('renders children', () => {
            const wrapper = shallow(
                <Typography.Uppercase>
                    <span>{'foo bar baz'}</span>
                </Typography.Uppercase>
            )

            expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
        })

        it('renders colorScheme', () => {
            const wrapper = shallow(<Typography.Uppercase colorScheme="white" />)
            expect(wrapper.hasClass(Typography.theme.white)).toBeTruthy()
        })
    })

    describe('Caption', () => {
        it('is available', () => {
            expect(Typography.Caption).toBeDefined()
        })

        it('renders children', () => {
            const wrapper = shallow(
                <Typography.Caption>
                    <span>{'foo bar baz'}</span>
                </Typography.Caption>
            )

            expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
        })
    })

    describe('Description', () => {
        it('is available', () => {
            expect(Typography.Description).toBeDefined()
        })

        it('renders children', () => {
            const wrapper = shallow(
                <Typography.Description>
                    <span>{'foo bar baz'}</span>
                </Typography.Description>
            )

            expect(wrapper.contains(<span>{'foo bar baz'}</span>)).toBeTruthy()
        })

        it('renders colorScheme', () => {
            const wrapper = shallow(<Typography.Description colorScheme="orange" />)
            expect(wrapper.hasClass(Typography.theme.orange)).toBeTruthy()
        })
    })
})
