# Cryptopia API

Clone the repo and run:

```
yarn build
```

# Getting Started

```javascript
import Cryptopia from 'cryptopia_api'

const API_KEY = 'YOUR_CRYPTOPIA_API_KEY'
const API_SECRET = 'YOUR_CRYPTOPIA_API_SECRET'

const cryptopia = new Cryptopia(API_KEY, API_SECRET)
```

# API methods

Need more information? check out the [Cryptopia docs](https://www.cryptopia.co.nz/Forum/Category/45).

```javascript
/*
*
* Public methods
*
*/

cryptopia.get_currencies((data) => console.log(data))

cryptopia.get_trade_pairs((data) => console.log(data))

cryptopia.get_markets((data) => console.log(data))

cryptopia.get_market([100], (data) => console.log(data))

cryptopia.get_market_history([100], (data) => console.log(data))

cryptopia.get_market_orders([100], (data) => console.log(data))

/*
*
* Private methods
*
*/

cryptopia.get_balance({ Currency: 'DOT' }, (data) => console.log(data))

cryptopia.get_deposit_address({ Currency: 'DOT' }, (data) => console.log(data))

cryptopia.get_open_orders({ TradePairId: 100 }, (data) => console.log(data))

cryptopia.get_trade_history({ TradePairId: 100 }, (data) => console.log(data))

cryptopia.get_transactions({ Type: 'Deposit' }, (data) => console.log(data))

cryptopia.submit_trade({ TradePairId: 100, Type: 'Buy', Rate: 0.00000034, Amount: 123.00000000 }, (data) => console.log(data))

cryptopia.cancel_trade({ Type: 'TradePair', TradePairId: 100 }, (data) => console.log(data))

cryptopia.submit_tip({ Currency: 'DOT', ActiveUsers: 2, Amount: 123.00000000 }, (data) => console.log(data))

cryptopia.submit_withdraw({ Currency: 'DOT', Address: 'YOUR_ADDRESS', PaymentId: 'PAYMENT_ID', Amount: 123.00000000 }, (data) => console.log(data))

cryptopia.submit_transfer({ Currency: 'DOT', Username: 'djmsutherland', Amount: 123.00000000 }, (data) => console.log(data))
```
