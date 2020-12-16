```jsx
{
    var CommandTranslations = { hint: 'Кнопка выбирает размер popup' }
    var modalA11y = {
        ariaHideApp: true,
        closeButtonTitle: 'Close this POPUP'
    }

    var handleClickSm = () => {
        setState({ openedWithSize: 'sm' })
    }

    var handleClickMd = () => {
        setState({ openedWithSize: 'md' })
    }

    var handleClickLg = () => {
        setState({ openedWithSize: 'lg' })
    }

    var handleClickXl = () => {
        setState({ openedWithSize: 'xl' })
    }

    var handleClose = () => {
        setState({ openedWithSize: void 0 })
    }

    initialState = {
        openedWithSize: void 0
    }
}

<div>
    <Button.Command
        onClick={handleClickSm}
        title="Открыть окно sm"
        translations={CommandTranslations}
    />
    <hr />
    <Button.Command
        onClick={handleClickMd}
        title="Открыть окно md"
        translations={CommandTranslations}
    />
    <hr />
    <Button.Command
        onClick={handleClickLg}
        title="Открыть окно lg"
        translations={CommandTranslations}
    />
    <hr />
    <Button.Command
        onClick={handleClickXl}
        title="Открыть окно xl"
        translations={CommandTranslations}
    />
    <Popup
        forceOpened={!!state.openedWithSize}
        onClose={handleClose}
        title="Header"
        size={state.openedWithSize}
        a11y={modalA11y}
    >
        <p>
            It is maintained by Facebook, Instagram and a community of individual developers
            and corporations.[2][3][4] According to JavaScript analytics service Libscore,
            React is currently being used on the websites of Netflix, Imgur, Bleacher Report,
            Feedly, Airbnb, SeatGeek, HelloSign, Walmart, Paviljons Concept Store and others.[5]
        </p>
        <p>
            React allows developers to create large web applications that use
            data which can change over time, without reloading the page. Its main goal
            is to be fast, simple and scalable. React processes only user interface in applications.
            This corresponds to View in the Model-View-Controller (MVC) template, and can be used
            in combination with other JavaScript libraries or frameworks in MVC,
            such as AngularJS[6]. It can also be used with React based on add-ons
            to take care of without the user interface parts of web developing.
        </p>
    </Popup>
</div>
```