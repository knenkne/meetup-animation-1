import _ from 'lodash'

export const getFieldsFromScreens = (screens = []) => _(screens)
    .flatMap(({ widgets = [], header = [], footer = [] }) => [...header, ...widgets, ...footer])
    .flatMap((widget) => widget.fields)
    .compact()
    .value()
