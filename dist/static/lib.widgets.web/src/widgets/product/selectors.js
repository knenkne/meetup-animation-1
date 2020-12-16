import { createSelector } from 'reselect'
import { selectors } from '@sbol/lib.workflow'

const getReferenceId = (state, referenceId) => referenceId

export const getProductReferences = createSelector(
    [selectors.getReferences, getReferenceId],
    (references, referenceId) => references[referenceId]
)
