import { autoLeftCheckByParent, autoLeftCheckByWindow, autoTopCheckByWindow, autoScroll, cyclicPrevItem, cyclicNextItem } from '../utils'

describe('<Dropdown /> utils (DOM elements simulation)', () => {
    it('is available', () => {
        expect(autoLeftCheckByParent).toBeDefined()
        expect(autoLeftCheckByWindow).toBeDefined()
        expect(autoTopCheckByWindow).toBeDefined()
        expect(autoScroll).toBeDefined()
        expect(cyclicPrevItem).toBeDefined()
        expect(cyclicNextItem).toBeDefined()
    })

    it('autoLeftCheckByParent left', () => {
        const content = {
            offsetWidth: 200
        }

        const target = {
            parentNode: {
                getBoundingClientRect: () => ({
                    right: 300
                })
            },
            getBoundingClientRect: () => ({
                left: 100
            })
        }

        expect(autoLeftCheckByParent()).toBe('left')
        expect(autoLeftCheckByParent(content)).toBe('left')
        expect(autoLeftCheckByParent(void 0, target)).toBe('left')
        expect(autoLeftCheckByParent(content, target)).toBe('left')
    })

    it('autoLeftCheckByParent right', () => {
        const content = {
            offsetWidth: 201
        }

        const target = {
            parentNode: {
                getBoundingClientRect: () => ({
                    right: 300
                })
            },
            getBoundingClientRect: () => ({
                left: 100
            })
        }

        expect(autoLeftCheckByParent(content, target)).toBe('right')
    })


    it('autoTopCheck bottom', () => {
        const content = {
            scrollHeight: document.documentElement.clientHeight / 2,
            firstChild: { style: {} }
        }

        const target = {
            getBoundingClientRect: () => ({
                bottom: document.documentElement.clientHeight / 2
            })
        }

        expect(autoTopCheckByWindow()).toBe('bottom')
        expect(autoTopCheckByWindow(content)).toBe('bottom')
        expect(autoTopCheckByWindow(void 0, target)).toBe('bottom')
        expect(autoTopCheckByWindow(content, target)).toBe('bottom')
    })


    it('autoTopCheck top', () => {
        const content = {
            scrollHeight: document.documentElement.clientHeight / 2,
            firstChild: { style: {} }
        }

        const target = {
            getBoundingClientRect: () => ({
                top: document.documentElement.clientHeight / 2 + 200,
                bottom: document.documentElement.clientHeight / 2 + 100
            })
        }

        expect(autoTopCheckByWindow(content, target)).toBe('top')
    })

    it('autoScroll', () => {
        const node = {
            clientHeight: 20,
            getBoundingClientRect: () => ({ top: 110 })
        }
        const contentPlate = {
            scrollTop: 0,
            clientHeight: 100,
            getBoundingClientRect: () => ({ top: 0 })
        }
        autoScroll(node, contentPlate)
        expect(contentPlate.scrollTop).toBe(30)

        node.getBoundingClientRect = () => ({ top: 20 })
        contentPlate.scrollTop = 0
        autoScroll(node, contentPlate)
        expect(contentPlate.scrollTop).toBe(0)

        node.getBoundingClientRect = () => ({ top: 90 })
        contentPlate.scrollTop = 0
        autoScroll(node, contentPlate)
        expect(contentPlate.scrollTop).toBe(10)
    })

    it('cyclicPrevItem', () => {
        const array = ['1', '2', '3']

        expect(cyclicPrevItem(array, array[2])).toBe(array[1])
        expect(cyclicPrevItem(array, array[1])).toBe(array[0])
        expect(cyclicPrevItem(array, array[0])).toBe(array[2])
    })

    it('cyclicNextItem', () => {
        const array = ['1', '2', '3']

        expect(cyclicNextItem(array, array[2])).toBe(array[0])
        expect(cyclicNextItem(array, array[1])).toBe(array[2])
        expect(cyclicNextItem(array, array[0])).toBe(array[1])
    })
})
