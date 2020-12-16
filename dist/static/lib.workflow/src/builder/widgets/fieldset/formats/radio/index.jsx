import React from 'react'
import { Field } from 'redux-form'
import { fieldAdapter } from '@sbol/lib.app'
import { Selection, Labeled, Markdown, mergeTheme, showError } from '@sbol/lib.ui'
import _ from 'lodash'

import style from './style.css'

const markdownDescriptionTheme = mergeTheme(Markdown.theme, {
    container: style.description
})

const radioTheme = mergeTheme(Selection.Radio.theme, {
    radio: style.radio
})

export const Select = ({title, ...props}) => (
    <Labeled {...props} error={showError(props)}>
        <Selection.Group id={props.id} title={title} value={props.value}>
            {props.options.map((item, index) => {
                const description = _.get(item, ['properties', 'description'])
                return (
                    <Selection.Radio
                        id={props.id + index}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                        name={props.id}
                        value={item.value}
                        key={item.value}
                        checked={props.value === item.value}
                        disabled={props.readonly}
                        error={showError(props)}
                        theme={radioTheme}
                    >
                        {item.title}

                        {description && (
                            <Markdown.Short
                                content={description}
                                theme={markdownDescriptionTheme}
                            />
                        )}
                    </Selection.Radio>
                )
            })}
        </Selection.Group>
    </Labeled>
)

export default ({ validators, referenceId, references, eventsActions, fieldStyles, ...props }) => (
    <Field
        {...props}
        validate={validators}
        component={fieldAdapter(Select)}
        options={references[referenceId].items}
    />
)
