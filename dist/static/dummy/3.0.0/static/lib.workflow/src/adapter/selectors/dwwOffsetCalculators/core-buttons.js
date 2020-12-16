export const getCoreButtonsOffset = ({ props, screen }) => {
    const previousWidget = screen.find((widget) => widget.widgetIndex === props.widgetIndex - 1)

    return previousWidget && previousWidget.type === 'CoreButtons'
        ? 'offset-md'
        : ''
}
