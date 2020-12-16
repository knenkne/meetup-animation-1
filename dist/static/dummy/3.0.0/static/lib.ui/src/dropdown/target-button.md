```jsx
{
    var DemoTargetButton = ({ forceOpened, onClick, onBlur }, { dropdown }) => {
        var title = `No value selected | ${forceOpened ? '^' : 'v'}`

        if (dropdown.getValue()) {
            title = `Selected value: ${dropdown.getValue()} | ${forceOpened ? '^' : 'v'}`
        }

        return <Button size="sm" onClick={onClick} onBlur={onBlur} title={title} />
    }

    DemoTargetButton.contextTypes = {
        dropdown: PropTypes.object
    }
}

<Demo.Form>
    <Demo.Titled
        title="Разные варианты использования Target"
    >
        <Demo.LabeledField
            name="custom:dropdown"
            component={Dropdown}
            title="Dropdown с кастомным Target"
        >
            <DemoTargetButton />
            <Dropdown.Contents>
                <Dropdown.Option
                    value="RUB"
                    title="Рубль"
                />
                <Dropdown.Option
                    value="USD"
                    title="Доллар"
                />
                <Dropdown.Option
                    value="WOW"
                    title="Третья опция"
                />
            </Dropdown.Contents>
        </Demo.LabeledField>
        <hr />
        <Demo.LabeledField
            name="custom:dropdown"
            component={Dropdown}
            title="Dropdown с родным TargetButton"
            description="без внутренней верстки; с галочкой"
        >
            <Dropdown.TargetButton>
                Здесь может расположиться верстка опции
            </Dropdown.TargetButton>
            <Dropdown.Contents>
                <Dropdown.Option
                    value="RUB"
                    title="Рубль"
                />
                <Dropdown.Option
                    value="USD"
                    title="Доллар"
                />
                <Dropdown.Option
                    value="WOW"
                    title="Третья опция"
                />
            </Dropdown.Contents>
        </Demo.LabeledField>
        <hr />
        <Demo.LabeledField
            name="custom:dropdown"
            component={Dropdown}
            title="Dropdown с родным TargetButton"
            description="без внутренней верстки; без галочки"
        >
            <Dropdown.TargetButton mode="none">
                Здесь может расположиться верстка опции
            </Dropdown.TargetButton>
            <Dropdown.Contents>
                <Dropdown.Option
                    value="RUB"
                    title="Рубль"
                />
                <Dropdown.Option
                    value="USD"
                    title="Доллар"
                />
                <Dropdown.Option
                    value="WOW"
                    title="Третья опция"
                />
            </Dropdown.Contents>
        </Demo.LabeledField>
    </Demo.Titled>
</Demo.Form>
```