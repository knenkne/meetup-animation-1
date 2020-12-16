```jsx
    {
        var response = () => {
            return { status: 200, data: {
                success: true,
                body: {
                    status: 'LC_ACCEPTED',
                    system: 'Reactive',
                    locales: {
                        title: 'Кредитный потенциал рассчитан',
                        description: 'Узнать какая сумма вам одобрена',
                        button: 'Узнать'
                    },
                    parts: {
                        available: 2000,
                        used: 500,
                        reserved: 250
                    }
                }
            }}
        }
        
        stubRequest('/person-credit/v7/ib/banking/products/loans/lending-capacity', response, 1000)
    }

    <div>
        <Grid>
            <Grid.Cell lg={29} md={19} sm={23}>
                <CapacityProduct axios={axios} />
            </Grid.Cell>
        </Grid>
    </div>
```
