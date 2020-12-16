```jsx
{
    var getDemoParentStyle = (width) => ({
        backgroundColor: '#cccccc',
        padding: '4px',
        borderRadius: '4px',
        width: `${width}px`,
        maxWidth: '100%',
        display: 'inline-block'
    })

    var DemoParent = ({ width, children }) => (
        <div style={getDemoParentStyle(width)}>
            {children}
            <span style={{ float: 'right' }}>Parent</span>
        </div>
    )
    var DemoChildren = ({ label, nowrap }) => <div style={{ whiteSpace: nowrap ? 'nowrap' : void 0, textOverflow: 'ellipsis', overflow: 'hidden', display: 'block' }}>{label}</div>
    var DemoTarget = ({ isOpened, onClick, onBlur }) => <Button size="sm" title={isOpened ? 'Close Dropdown' : 'Open Dropdown'} onClick={onClick} onBlur={onBlur} />
    var styleContentsAuto = { width: 'auto' }
}

<Demo.Titled title="Выравнивания контента - фиксированные и автоматические" description="_Нажимайте на кнопки для проверки поведения_">
    Горизонтальное выравнивание фиксированное:
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents align="right" style={styleContentsAuto}>
            <DemoChildren nowrap label="Содержимое всегда выравнено по правому краю target: align = right" />
        </Dropdown.Contents>
    </Dropdown>
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents align="left" style={styleContentsAuto}>
            <DemoChildren nowrap label="Содержимое всегда выравнено по левому краю target: align = left" />
        </Dropdown.Contents>
    </Dropdown>
    <hr />
    Горизонтальное выравнивание автоматическое (дефолтное поведение):
    <DemoParent width={600}>
        <Dropdown>
            <DemoTarget />
            <Dropdown.Contents style={styleContentsAuto}>
                <DemoChildren nowrap label="Содержимое выравнено по левому краю target: родитель шире" />
            </Dropdown.Contents>
        </Dropdown>
    </DemoParent>
    {' '}
    <DemoParent width={200}>
        <Dropdown>
            <DemoTarget />
            <Dropdown.Contents style={styleContentsAuto}>
                <DemoChildren nowrap label="Содержимое выравнено по правому краю target: правый край родителя находится левее правого края children" />
            </Dropdown.Contents>
        </Dropdown>
    </DemoParent>
    <hr />
    Горизонтальное выравнивание автоматическое (по окну, а не по родителю):
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents align={Dropdown.utils.autoLeftCheckByWindow} style={styleContentsAuto}>
            <DemoChildren nowrap label="Контент шире Target и позволяет изменением размера окна проверить поведение" />
        </Dropdown.Contents>
    </Dropdown>
    <hr />
    Вертикальное выравнивание фиксированное:
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents verticalAlign="bottom">
            <DemoChildren label="Содержимое всегда снизу target: verticalAlign = bottom" />
        </Dropdown.Contents>
    </Dropdown>
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents verticalAlign="top">
            <DemoChildren label="Содержимое всегда сверху target: verticalAlign = top" />
        </Dropdown.Contents>
    </Dropdown>
    <hr />
    Вертикальное выравнивание автоматическое (default):
    <Dropdown>
        <DemoTarget />
        <Dropdown.Contents>
            <DemoChildren label="Раскройте Dropdown, расположив его внизу окна браузера" />
        </Dropdown.Contents>
    </Dropdown>
</Demo.Titled>
```