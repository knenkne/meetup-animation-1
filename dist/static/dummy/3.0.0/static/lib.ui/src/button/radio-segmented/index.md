```jsx
{
    var emptyA11y = {}

    var listA11y = {
        title: 'Отобразить списком'
    }
    var mapA11y = {
        title: 'Отобразить таблицей'
    }
    
    var initialValues = {
        segmented: '1',
        icons: '1',
        segmentedDisabled: '1'
    }
}

<Demo.Form initialValues={initialValues}>
    <Demo.ControlledPlate>
        <fieldset>
            <legend>Обычный набор кнопок</legend>
            <Field type="radio" name="segmented" value="1" component={Button.RadioSegmented} a11y={emptyA11y}>Значение 1</Field>
            <Field type="radio" name="segmented" value="2" component={Button.RadioSegmented} a11y={emptyA11y}>Значение 2</Field>
            <Field type="radio" name="segmented" value="3" component={Button.RadioSegmented} a11y={emptyA11y} mode="last">Значение 3</Field>
        </fieldset>
        <fieldset>
            <legend>Для иконок укажите альтернативный текст (a11y)</legend>
            <Field type="radio" name="icons" value="1" component={Button.RadioSegmented} a11y={listA11y}><Icon name="icon:core/common/list" /></Field>
            <Field type="radio" name="icons" value="2" component={Button.RadioSegmented} a11y={mapA11y} mode="last"><Icon name="icon:core/common/table" /></Field>
        </fieldset>
        <fieldset>
            <legend>Набор частично заблокированных кнопок</legend>
            <Field type="radio" name="segmentedDisabled" value="1" component={Button.RadioSegmented} a11y={emptyA11y} disabled>Значение 1</Field>
            <Field type="radio" name="segmentedDisabled" value="2" component={Button.RadioSegmented} a11y={emptyA11y} disabled>Значение 2</Field>
            <Field type="radio" name="segmentedDisabled" value="3" component={Button.RadioSegmented} a11y={emptyA11y} mode="last" >Значение 3</Field>
        </fieldset>
    </Demo.ControlledPlate>
</Demo.Form>
```