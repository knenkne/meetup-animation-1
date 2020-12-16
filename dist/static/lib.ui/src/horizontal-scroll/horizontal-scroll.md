### Пример с длинным текстом

```jsx
    <HorizontalScroll>
        <span  style={{ whiteSpace: 'nowrap' }}>Здесь у нас некий короткий текст, для которого не потребуется скролл</span>
    </HorizontalScroll>
```

```jsx
    <HorizontalScroll>
        <span style={{ whiteSpace: 'nowrap' }}>А здесь у нас некий очень длинный текст, который скорее всего вылезет за максимально возможные и допустимые границы окна просто потому что он может это сделать и ему сие никто не запретит</span>
    </HorizontalScroll>
```

### Пример с набором карточек
```jsx
    <HorizontalScroll scrollWidth={352}>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 1"
                description="Description"
                icon="icon:core/products/depo"
            />
        </div>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 2"
                description="Description"
                icon="icon:core/products/loan-auto"
            />
        </div>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 3"
                icon="icon:core/products/ghost-insurance"
            />
        </div>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 4"
                icon="icon:core/products/loan-auto"
            />
        </div>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 5"
                description="Description"
                icon="icon:core/products/depo"
            />
        </div>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 6"
                description="Description"
                icon="icon:core/products/loan-auto"
            />
        </div>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 7"
                icon="icon:core/products/ghost-insurance"
            />
        </div>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 8"
                icon="icon:core/products/loan-auto"
            />
        </div>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 9"
                icon="icon:core/products/ghost-insurance"
            />
        </div>
        <div style={{display: 'inline-block'}}>
            <FastActions.FastAction
                title="Title 10"
                icon="icon:core/products/loan-auto"
            />
        </div>
    </HorizontalScroll>
```
