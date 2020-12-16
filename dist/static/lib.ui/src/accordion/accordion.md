### Классический accordion

```jsx
{
  var text = `Узнайте подробные условия, по кредиту и рассчитайте на калькуляторе примерный график платежей на странице кредита на любые цели. Или подберите нужный тип кредита в разделе «Кредиты». В этом же разделе вы сможете рассчитать примерный график платежей и оформить заявку на кредит.`;
}

<Accordion a11y={{ id: "example" }}>
  <Accordion.Item title="Как узнать условия кредитования?" aria-level="2">
    {text}
  </Accordion.Item>
  <Accordion.Item title="Какой срок рассмотрения заявки на кредит в Сбербанке?" aria-level="2">
    {text}
  </Accordion.Item>
  <Accordion.Item title="Операция совершалась в отделении банка?" aria-level="2">
    {text}
  </Accordion.Item>
</Accordion>;
```

### Классический accordion с collapsible

```jsx
{
  var text = `

Content Text. Contrary to popular belief, Lorem Ipsum is not simply random text.

Content Text. Contrary to popular belief, Lorem Ipsum is not simply
random text.`;
}

<Accordion a11y={{ id: "example" }} collapsible>
  <Accordion.Item title="Вопрос номер раз?" aria-level="2">
    {text}
  </Accordion.Item>
  <Accordion.Item title="Вопрос номер два?" aria-level="2">
    {text}
  </Accordion.Item>
  <Accordion.Item title="Вопрос номер три?" aria-level="2">
    {text}
  </Accordion.Item>
</Accordion>;
```

### Info accordion (mode="info")

```jsx
{
  var text = `Тестовый текст, очень интересный и познавательный`;
  var text2 = `В целом, сюда можно положить любой свой контент. Кнопки, изображения, таблицы... 
    И самостоятельно отстилизовать его в соответствии с макетами.`;
}

<Accordion a11y={{ id: "example2" }} mode="info">
  <Accordion.Item title="Вопрос номер раз? Вопрос номер раз?" aria-level="2">
    {text}
  </Accordion.Item>
  <Accordion.Item title="В каком объеме можно вносить средства на ИИС?" aria-level="2">
    {text2}
  </Accordion.Item>
  <Accordion.Item 
    title="Вообще, тут может быть любой контент" 
    description="А также описание" 
    icon="icon:core/operations/payandtrasfOtherbank"
    aria-level="2"
  >
    {text}
  </Accordion.Item>
</Accordion>;
```

### Description accordion (mode="description", description="Описание" )

```jsx
{
  var text = `Тестовый текст, очень интересный и познавательный`;
  var text2 = `В целом, сюда можно положить любой свой контент. Кнопки, изображения, таблицы... 
    И самостоятельно отстилизовать его в соответствии с макетами.`;
}

<Accordion a11y={{ id: "example3" }} mode="description">
  <Accordion.Item
    title="Вопрос номер раз? Вопрос номер два? Вопрос номер раз? Вопрос номер два? Вопрос номер?"
    description="Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание"
    aria-level="2"
  >
    {text}
  </Accordion.Item>
  <Accordion.Item 
    title="Вопрос номер два?" 
    aria-level="2"
    description="Я теперь умею в description"
    icon="icon:core/operations/payandtrasfOtherbank"
  >
    {text}
    <div style={{ display: "flex", width: "100%", padding: "14px 0" }}>
      {text2}
    </div>
  </Accordion.Item>
  <Accordion.Item
    title="Вопрос номер три?"
    aria-level="2"
  >
    {text}
  </Accordion.Item>
</Accordion>;
```

### Widget accordion, можно открыть несколько блоков (mode="widget", collapsible)

```jsx
{
  var text = `You can't steal the things that god has given me
              No more pain and no more shame and misery`;
  var text2 = `В целом, сюда можно положить любой свой контент. Кнопки, изображения, таблицы...`;
}

function WrappedComponent() {
  return (
    <div>
      {500 + 65} <Currency title={"RUB"} mode="symbol" />
    </div>
  );
}

<Accordion
  a11y={{ id: "example4" }}
  mode="widget"
  initialValue={"Первый блок"}
  collapsible
>
  <Accordion.Item
    title="Первый блок"
    aria-level="2"
    as={"Цена, дата, еще что-то"}
  >
    {text}
  </Accordion.Item>
  <Accordion.Item title="Обязательный платёж внести до 21 марта" aria-level="2" as={WrappedComponent()}>
    {text2}
  </Accordion.Item>
  <Accordion.Item title="Блок с негативным контентом" aria-level="2" warning>
    {text}
  </Accordion.Item>
</Accordion>;
```
