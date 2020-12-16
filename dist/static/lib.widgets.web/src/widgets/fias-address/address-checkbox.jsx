import React from 'react'
import _ from 'lodash'
import { Selection, Labeled } from '@sbol/lib.ui'

export const AddressCheckbox = (props) => (
    <Labeled {..._.omit(props, ['title', 'description'])}>
        <Selection.Checkbox
            {..._.omit(props, ['initial'])}
            mode="switch"
        />
    </Labeled>
)
