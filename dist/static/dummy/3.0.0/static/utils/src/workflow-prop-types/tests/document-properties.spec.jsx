import { DocumentProperties } from '../document-properties'
import { Field, Fields, MappedFields } from '../field'
import { ReferenceItem, Reference, References } from '../reference'
import { Screen } from '../screen'
import { Widget, Widgets } from '../widget'

describe('WorkflowPropTypes', () => {
    it(' DocumentProperties существуют', () => {
        expect(DocumentProperties).toBeDefined()
    })

    it(' Field существует', () => {
        expect(Field).toBeDefined()
        expect(Fields).toBeDefined()
        expect(MappedFields).toBeDefined()
    })

    it(' Reference существует', () => {
        expect(Reference).toBeDefined()
        expect(References).toBeDefined()
        expect(ReferenceItem).toBeDefined()
    })

    it(' Screen существует', () => {
        expect(Screen).toBeDefined()
    })

    it(' Widget существует', () => {
        expect(Widget).toBeDefined()
        expect(Widgets).toBeDefined()
    })


})
