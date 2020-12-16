### Обычная таблица

```jsx
<Table>
  <Table.Header>
    <Table.Title>Табличка</Table.Title>
  </Table.Header>
  <Table.Block>
    <Table.Row>
      <p>Здесь может быть любой контент</p>
      <p>
        <Icon name="icon:core/operations/list" size="self" />
      </p>
    </Table.Row>
    <Table.Row>
      <p>И здесь тоже</p>
      <p>
        <Icon name="icon:core/products/mp-master-card" size="self" />
        <span> MasterCard Mass</span>
        <span style={{ color: "rgba(38, 38, 38, 0.7)" }}> ••• 1234</span>
      </p>
    </Table.Row>
  </Table.Block>
  <Table.Block>
    <Table.Row>
      <p>Компонент сделал...</p>
      <p>Гений</p>
    </Table.Row>
  </Table.Block>
</Table>
```

### Таблица с кнопочкой справа и любыми штуками внутри

```jsx
{
  var text = "Тестовый текст, очень интересный и познавательный";
  var text2 =
    "В целом, сюда можно положить любой свой контент. Кнопки, изображения, таблицы... И самостоятельно отстилизовать его в соответствии с макетами.";
}

<Table>
  <Table.Header>
    <Table.Title>Табличка</Table.Title>
    <Icon name="icon:core/common/print" size="self" />
  </Table.Header>
  <Table.Block>
    <Table.Row>
      <p>Здесь может быть любой контент</p>
      <p>
        <Icon name="icon:core/operations/list" size="self" />
      </p>
    </Table.Row>
    <Table.Row>
      <p>И здесь тоже</p>
      <p>
        <Icon name="icon:core/products/mp-master-card" size="self" />
        <span> MasterCard Mass</span>
        <span style={{ color: "rgba(38, 38, 38, 0.7)" }}> ••• 1234</span>
      </p>
    </Table.Row>
  </Table.Block>
  <Table.Block title="Здесь может быть все, что угодно">
    <Accordion a11y={{ id: "example2" }} mode="info">
      <Accordion.Item title="Вопрос номер раз?" aria-level="2">
        <Markdown.Full content={text} />
      </Accordion.Item>
      <Accordion.Item title="Вопрос номер два?" aria-level="2">
        <Markdown.Full content={text} />
        <div style={{ display: "flex", width: "100%", padding: "14px 0" }}>
          {text2}
        </div>
      </Accordion.Item>
      <Accordion.Item title="Вопрос номер три?" aria-level="2">
        <Markdown.Full content={text} />
      </Accordion.Item>
    </Accordion>
  </Table.Block>
</Table>;
```
