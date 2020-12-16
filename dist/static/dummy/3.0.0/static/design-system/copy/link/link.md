```jsx
<Demo.Titled title="Размеры, цвета и иконки">
    <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
            <Link href="#">Ссылка</Link>
            <hr />
            <Link href="#" mode="file:word">Ссылка</Link>
            <hr />
            <Link href="#" mode="file:xlsx">Ссылка</Link>
            <hr />
            <Link href="#" mode="file:pdf">Ссылка</Link>
            <hr />
            <Link href="#" mode="file:html">Ссылка</Link>
            <hr />
            <Link href="#" mode="file:txt">Ссылка</Link>
            <hr />
            <Link href="#" mode="forward">Ссылка</Link>
            <hr />
            <Link href="#" mode="backward">Ссылка</Link>
            <hr />
            <Link href="#" mode="email">Ссылка</Link>
            <hr />
            <Link href="#" mode="print">Ссылка</Link>
            <hr />
            <Link href="#" mode="download">Ссылка</Link>
            <hr />
            <Link href="#" mode="underline">Ссылка</Link>
            <hr />
            <Link href="#" mode="underline" external>Ссылка</Link>
            <hr />
            <Link href="#" external>Ссылка</Link>
            <hr />
            <Link href="#" external bold>Ссылка</Link>
            <hr />
            <Link href="#" icon="icon:core/products/goldCard">Ссылка</Link>
            <hr />
            <Link href="#" bold>Ссылка</Link>
        </div>
        <div style={{ marginLeft: '16px', flexGrow: 1 }}>
            <Link href="#" colorScheme="gray">Ссылка</Link>
            <hr />
            <Link href="#" colorScheme="gray" mode="file:word">Ссылка</Link>
            <hr />
            <Link href="#" colorScheme="gray" mode="file:xlsx">Ссылка</Link>
            <hr />
            <Link href="#" colorScheme="gray" mode="file:pdf">Ссылка</Link>
            <hr />
            <Link href="#" colorScheme="gray" mode="forward">Ссылка</Link>
            <hr />
            <Link href="#" colorScheme="gray" mode="backward">Ссылка</Link>
            <hr />
            <Link href="#" external colorScheme="gray">Ссылка</Link>
            <hr />
            <Link href="#" external bold colorScheme="gray">Ссылка</Link>
            <hr />
            <Link href="#" colorScheme="gray" icon="icon:core/cars/dodge">Ссылка</Link>
            <hr />
            <Link href="#" colorScheme="gray" bold>Ссылка</Link>
            <hr />
            <Link href="#"colorScheme="gray" mode="underline">Ссылка</Link>
            <hr />
            <Link href="#" colorScheme="gray" size="sm">Ссылка</Link>
            <hr />
            <Link href="#" colorScheme="gray" size="sm" bold>Ссылка</Link>
        </div>
        <div style={{ marginLeft: '16px', flexGrow: 1 }}>
            <Link href="#" size="sm">Ссылка</Link>
            <hr />
            <Link href="#" size="sm" mode="file:word">Ссылка</Link>
            <hr />
            <Link href="#" size="sm" mode="file:xlsx">Ссылка</Link>
            <hr />
            <Link href="#" size="sm" mode="file:pdf">Ссылка</Link>
            <hr />
            <Link href="#" size="sm" mode="forward">Ссылка</Link>
            <hr />
            <Link href="#" size="sm" mode="backward">Ссылка</Link>
            <hr />
            <Link href="#" size="sm" external>Ссылка</Link>
            <hr />
            <Link href="#" size="sm" external bold>Ссылка</Link>
            <hr />
            <Link href="#" size="sm" icon="icon:core/cars/dodge">Ссылка</Link>
            <hr />
            <Link href="#" size="sm" bold>Ссылка</Link>
            <hr />
            <Link href="#" size="sm" mode="underline">Ссылка</Link>
        </div>
    </div>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Ссылки на продуктовых страницах">
     <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        <div style={{marginRight: '32px'}}>
            <Link href="#" colorScheme="purple">Инвестиции</Link><br />
            <Link href="#" colorScheme="purple" bold>Инвестиции</Link><br />
            <Link href="#" colorScheme="purple" mode="underline">Инвестиции</Link><br />
            <Link href="#" colorScheme="purple" size="sm">Инвестиции</Link><br />
            <Link href="#" colorScheme="purple" size="sm" bold>Инвестиции</Link>
        </div>
        <div style={{marginRight: '32px'}}>
            <Link href="#" colorScheme="blue">Кредиты</Link><br />
            <Link href="#" colorScheme="blue" bold>Кредиты</Link><br />
            <Link href="#" colorScheme="blue" mode="underline">Кредиты</Link><br />
            <Link href="#" colorScheme="blue" size="sm">Кредиты</Link><br />
            <Link href="#" colorScheme="blue" size="sm" bold>Кредиты</Link>
        </div>
        <div style={{marginRight: '32px'}}>
            <Link href="#" colorScheme="goals">Цели</Link><br />
            <Link href="#" colorScheme="goals" bold>Цели</Link><br />
            <Link href="#" colorScheme="goals" mode="underline">Цели</Link><br />
            <Link href="#" colorScheme="goals" size="sm">  Цели</Link><br />
            <Link href="#" colorScheme="goals" size="sm" bold>  Цели</Link>
        </div>
        <div style={{marginRight: '32px'}}>
            <Link href="#" colorScheme="sky-blue">Страховки</Link><br />
            <Link href="#" colorScheme="sky-blue" bold>Страховки</Link><br />
            <Link href="#" colorScheme="sky-blue" mode="underline">Страховки</Link><br />
            <Link href="#" colorScheme="sky-blue" size="sm">Страховки</Link><br />
            <Link href="#" colorScheme="sky-blue" size="sm" bold>Страховки</Link>
        </div>
        <div style={{marginRight: '32px'}}>
            <Link href="#" colorScheme="aqua">Вклады</Link><br />
            <Link href="#" colorScheme="aqua" bold>Вклады</Link><br />
            <Link href="#" colorScheme="aqua" mode="underline">Вклады</Link><br />
            <Link href="#" colorScheme="aqua" size="sm">Вклады</Link><br />
            <Link href="#" colorScheme="aqua" size="sm" bold>Вклады</Link>
        </div>
        <div style={{marginRight: '32px'}}>
            <Link href="#" colorScheme="gold">Золото</Link><br />
            <Link href="#" colorScheme="gold" bold>Золото</Link><br />
            <Link href="#" colorScheme="gold" mode="underline">Золото</Link><br />
            <Link href="#" colorScheme="gold" size="sm">Золото</Link><br />
            <Link href="#" colorScheme="gold" size="sm" bold>Золото</Link>
        </div>
        <div style={{marginRight: '32px'}}>
            <Link href="#" colorScheme="metal">Металлы</Link><br />
            <Link href="#" colorScheme="metal" bold>Металлы</Link><br />
            <Link href="#" colorScheme="metal" mode="underline">Металлы</Link><br />
            <Link href="#" colorScheme="metal" size="sm">Металлы</Link><br />
            <Link href="#" colorScheme="metal" size="sm" bold>Металлы</Link>
        </div>
        <div style={{marginRight: '32px'}}>
            <Link href="#" colorScheme="orange">Ошибка</Link><br />
            <Link href="#" colorScheme="orange" bold>Ошибка</Link><br />
            <Link href="#" colorScheme="orange" mode="underline">Ошибка</Link><br />
            <Link href="#" colorScheme="orange" size="sm">Ошибка</Link><br />
            <Link href="#" colorScheme="orange" size="sm" bold>Ошибка</Link>
        </div>
     </div>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Ссылка для навигации с mode='breadcrumb'">
     <Link href="#" mode="breadcrumb">Ссылка</Link>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Ссылки со стилем кнопки с соответствующей цветовой палитрой не тянутся по ширине">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Link href="#" colorScheme="button">Ссылка</Link>
            <Link href="#" colorScheme="button-blue">Ссылка</Link>
            <Link href="#" colorScheme="button-purple">Ссылка</Link>
            <Link href="#" colorScheme="button-aqua">Ссылка</Link>
            <Link href="#" colorScheme="button-gold">Ссылка</Link>
            <Link href="#" colorScheme="button-black">Ссылка</Link>
            <Link href="#" colorScheme="button-green">Ссылка</Link>
            <Link href="#" colorScheme="button-secondary">Ссылка</Link>
        </div>
</Demo.Titled>
```

```jsx
<Demo.Titled title="Перенос послендего слова с иконкой внешней ссылки">
    <div style={{width: "310px", border: "1px solid"}}>
        {"Я соглашаюсь "}
        <Link href="#" external >
            {"с условиями обработки персональных данных ПАО Сбербанк"}
        </Link>
    </div>
    <br/>
    <div style={{width: "460px", border: "1px solid"}}>
        {"Я соглашаюсь с условиями обработки персональных "}
        <Link href="#" external >
            {"данных"}
        </Link>
    </div>
</Demo.Titled>
```
