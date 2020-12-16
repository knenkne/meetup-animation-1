# no-undefined-display-name

Prevent missing displayName in a React component definition. Supports arrow functions and class declarations.

DisplayName allows you to name your component. This name is used by React in debugging messages.

### Rule Details

The following patterns are considered warnings:

```js
const BadComponent = ({ name }) => <div>{name}</div>

class BadClass extends React.Component {
    render () {
        return <div>this.props.name</div>
    }
}
```

The following patterns are **not** considered warnings:

```js
const GoodComponent = ({ name }) => <div>{name}</div>

GoodComponent.displayName = 'GoodComponent'

class GoodClass extends React.Component {
    
    static displayName = 'GoodClass'
    
    render () {
        return <div>this.props.name</div>
    }
}
```

### Rule Options

```json
{
  "rules": {
    "@sbol/loans-creditability/no-undefined-display-name": [<level>, { "isCapitalizedOnly": <boolean> }]
  }
}
```

#### isCapitalizedOnly

Default value `true`.

When `true` the rule will affect only components with capitalized names, e.g. `ComponentName`.

When `false` the rule will affect all components, e.g. `ComponentName` and `componentName`.
