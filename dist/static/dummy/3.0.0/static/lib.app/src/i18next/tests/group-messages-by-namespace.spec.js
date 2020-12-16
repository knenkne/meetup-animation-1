import { groupMessagesByNamespace } from '../group-messages-by-namespace'

describe('Group messages by namespace', () => {
    it('Only project (without ns in keys)', () => {
        expect(groupMessagesByNamespace('dummy', {
            foo: 'foo1',
            bar: 'bar1',
            baz: 'baz1'
        })).toEqual({
            dummy: {
                foo: 'foo1',
                bar: 'bar1',
                baz: 'baz1'
            }
        })
    })

    it('Only project (and ns in keys)', () => {
        expect(groupMessagesByNamespace('dummy', {
            foo: 'foo1',
            bar: 'bar1',
            'dummy:baz': 'baz1'
        })).toEqual({
            dummy: {
                foo: 'foo1',
                bar: 'bar1',
                baz: 'baz1'
            }
        })
    })

    it('Both libs and project', () => {
        expect(groupMessagesByNamespace('dummy', {
            foo: 'foo1',
            'dummy:bar': 'bar1',
            'lib.workflow:baz': 'baz1',
            'lib.widgets.web:qux': 'qux1'
        })).toEqual({
            dummy: {
                foo: 'foo1',
                bar: 'bar1'
            },
            'lib.workflow': {
                baz: 'baz1'
            },
            'lib.widgets.web': {
                qux: 'qux1'
            }
        })
    })


    it('Only libs', () => {
        expect(groupMessagesByNamespace('dummy', {
            'lib.workflow:foo': 'foo1',
            'lib.workflow:bar': 'bar1',
            'lib.workflow:baz': 'baz1'
        })).toEqual({
            'lib.workflow': {
                foo: 'foo1',
                bar: 'bar1',
                baz: 'baz1'
            }
        })
    })

    it('Empty object', () => {
        expect(groupMessagesByNamespace('dummy', {})).toEqual({})
    })
})
