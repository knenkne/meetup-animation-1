Разрешённые элементы:
- заголовки
- параграфы
- ссылки (для внешних ссылок автоматически проставляется `target="_blank" rel="noopener noreferrer"`)
- выделение жирным (курсив автоматически преобразуется к жирному)
- неупорядоченный список (с вложенностью)
- упорядоченный список (с вложенностью)
- разделители
- аббревиатуры

Дополнительные символы:
- символ неразрывного пробела `\u00a0`

[Краткая спецификация](http://commonmark.org/help/)

[Детальная спецификация](http://spec.commonmark.org/0.27/)

```jsx
{
    var content = `
    ## Выделения шрифта:

    _Italic_

    __Bold__

    ## Заголовки:

    # Heading 1

    ## Heading 2

    ### Heading 3

    #### Heading 4

    ##### Heading 5

    ###### Heading 6

    ## Абзацы:

    normal text

    ## Ссылки (внутренние, внешние):

    [Link External](http://ya.ru)

    [External](http://ya.ru)

    [Link Internal: ID from navigation](CARDS)

    [Link Internal: like a Link by history](/payments)

    ## Изображения (игнорируются):

    ![Image](http://www.sberbank.ru/portalserver/content/atom/contentRepository/content?id=35f8876c-36fe-48b6-83d0-1ec3388a22f3)

    ## Списки:

    ### Неупорядоченные:

    + Пункты неупорядоченного списка выделяются "+", "-", or "*"
    + Вложенные списки выделяются дополнительными 2 пробелами:
      - Вот так:
        * Ac tristique libero volutpat at
        + Facilisis in pretium nisl aliquet
        - Nulla volutpat aliquam velit
    + Продолжаем первый список

    ### Упорядоченные:

    1. Lorem ipsum dolor sit amet
    2. Consectetur adipiscing elit
    3. Integer molestie lorem at massa

    1. Можно указывать правильную нумерацию...
    1. ...или оставить все с "1."

    Можно начать список с определенного пункта:

    57. foo
    1. bar

    ## Разделители:

    ---

    ***

    ___

    ## Таблицы (не преобразуются):

    | Option | Description |
    | ------ | ----------- |
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |

    ## Таблицы с правым выравниванием (не преобразуются):

    | Option | Description |
    | ------:| -----------:|
    | data   | path to data files to supply the data that will be passed into templates. |
    | engine | engine to be used for processing templates. Handlebars is the default. |
    | ext    | extension to be used for dest files. |

    ## Определения (не преобразуются):

    Термин 1
      ~ Описание 1

    Термин 2
      ~ Описание 2a
      ~ Описание 2b

    ## Аббревиатуры:

    Пример с аббревиатурой HTML.

    Аббревиатура укажется для "HTML", но если оно является подстрокой - "xxxHTMLyyy" то аббревиатура не вставится.

    *[HTML]: Hyper Text Markup Language
    `
    var nbsp = '\u00a0'
    var nbsp_example = `
    ## Неразрывный пробел:
    тут идет какой-то MD текст и [ссылка разорвалась](http://ya.ru)
    
    а тут неразрывный пробел [ссылка${nbsp}не${nbsp}разорвалась](http://ya.ru)
    
    работает и с обычным текстом: весь${nbsp}текст${nbsp}с${nbsp}новой${nbsp}cтроки
    `
}
<div>
    <Markdown.Short content={content} />
    <Grid>
        <Grid.Cell lg={11} md={11} sm={22} >
            <Markdown.Short content={nbsp_example} />
        </Grid.Cell>
    </Grid>
</div>
```
