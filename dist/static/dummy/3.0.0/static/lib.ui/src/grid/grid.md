### Размеры колонок согласно сетке UIKit

| Ширина экрана   | Количество колонок | Ширина колонки | Ширина контента | Ширина бокового меню |
| --------------- |:------------------:|:--------------:|:---------------:| --------------------:|
| 1056px ~ ∞      | 29                 | 32px           | 928px           | 320px (64px)*(2)     |
| 732px - 1055px  | 19                 | 32px           | 608px           | 320px (64px)*(2)     |
| 414px*(1)       | 23                 | 16px           | 368px           | 0px                  |

* 1 - 414px со скейлингом в обе стороны до 320px и 731px
* 2 - ширина бокового меню в свернутом состоянии

#### Пример:
```markdown
<Grid>
    <Grid.Cell lg={9} />
    <Grid.Cell lg={9} offsetLg={1} />
    <Grid.Cell lg={9} offsetLg={1} />
</Grid>

Сумма(lg) = 3 * 9 + 1 + 1 = 29

<Grid>
    <Grid.Cell md={9} sm={23} />
    <Grid.Cell md={9} sm={23} offsetMd={1} />
</Grid>

Сумма(md) = 9 * 2 + 1 = 19
Кратность(sm) = 19 - каждый блок занимает всю ширину на разрешении sm и кратен 19
```

#### Больше примеров использования гридов:

```jsx
{
    const Child = (props) => (
        <div
            style={{
                background: '#eee',
                textAlign: 'center',
                lineHeight: `${props.height || 40}px`,
                border: `1px solid #222222`
            }}
        >
            {props.children}
        </div>
    )
}

<div>
    <h3>Основная область и sidebar (как на главной странице СБОЛа в новом дизайне)</h3>

    <Grid>
        <Grid.Cell lg={17} md={12} sm={14}>
            <Child>
                lg=17 md=12 sm=14<br/>
                Тут автор допустил немного вольности и добавил красивый текст
            </Child>
        </Grid.Cell>
        <Grid.Cell lg={9} md={5} sm={7} offsetLg={3} offsetMd={2} offsetSm={2}>
            <Child>lg=9 md=5 sm=7 offsetLg=3 offsetMd=2 offsetSm=2</Child>
        </Grid.Cell>
    </Grid>

    <h3>Компоновка с разбиением на три колонки</h3>

    <Grid>
        <Grid.Cell lg={9} md={6} sm={7}>
            <Child>lg=9 md=6 sm=7</Child>
        </Grid.Cell>
        <Grid.Cell lg={9} md={6} sm={7} offsetLg={1} offsetMd={1} offsetSm={1}>
            <Child>lg=9 md=6 sm=7 offsetLg=1 offsetMd=1 offsetSm=1</Child>
        </Grid.Cell>
        <Grid.Cell lg={9} md={5} sm={7} offsetLg={1} offsetMd={1} offsetSm={1}>
            <Child>lg=9 md=5 sm=7 offsetLg=1 offsetMd=1 offsetSm=1</Child>
        </Grid.Cell>
    </Grid>

    <h3>Компоновка с разбиением на две колонки</h3>

    <Grid>
        <Grid.Cell lg={14} md={9} sm={11}>
            <Child>
                lg=14 md=9 sm=11<br />
                Тут еще чуток текста для красоты
            </Child>
        </Grid.Cell>
        <Grid.Cell lg={14} md={9} sm={11} offsetLg={1} offsetMd={1} offsetSm={1}>
            <Child>lg=14 md=9 sm=11 offsetLg=1 offsetMd=1 offsetSm=1</Child>
        </Grid.Cell>
    </Grid>

    <h3>Вложенная сетка</h3>

    <Grid>
        <Grid.Cell lg={29} md={19} sm={23}>
            <Child>lg=29 md=19 sm=23</Child>
            <br />
        </Grid.Cell>
        <Grid.Cell lg={29} md={19} sm={23}>
            <Grid>
                <Grid.Cell lg={14} md={9} sm={11}>
                    <Child>lg=14 md=9 sm=11</Child>
                </Grid.Cell>
                <Grid.Cell lg={14} md={9} sm={11} offsetLg={1} offsetMd={1} offsetSm={1}>
                    <Child>lg=14 md=9 sm=11 offsetLg=1 offsetMd=1 offsetSm=1</Child>
                </Grid.Cell>
            </Grid>
        </Grid.Cell>
    </Grid>

    <h3>Прячем блоки на разных view-портах</h3>

    <Grid>
        <Grid.Cell lg={2} md={0} sm={0}>
            <Child>lg=2 md=0 sm=0</Child>
        </Grid.Cell>
        <Grid.Cell lg={25} md={19} sm={23} >
            <Child>
                lg=25 md=19 sm=23<br/>
                Блоки можно прятать на меньших разрешениях
            </Child>
        </Grid.Cell>
        <Grid.Cell lg={2} md={0} sm={0}>
            <Child>lg=2 md=0 sm=0</Child>
        </Grid.Cell>
    </Grid>

    <h3>Показываем блоки на разных view-портах</h3>

    <Grid>
        <Grid.Cell lg={0} md={19} sm={23} >
            <Child>
                lg=0 md=19 sm=23<br/>
                Видно только на планшетнои и мобильном разрешениях
            </Child>
        </Grid.Cell>
    </Grid>
</div>
```
