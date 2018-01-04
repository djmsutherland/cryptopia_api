/*
*
* Cryptopia API
*
* const key = 'YOUR_CRYPTOPIA_API_KEY'
* const secret = 'YOUR_CRYPTOPIA_API_SECRET'
* const cryptopia = new Cryptopia(key, secret)
*
*/

import {
  public_api,
  private_api,
} from './helpers'

class Cryptopia {
  constructor(key, secret) {
    this.key = key
    this.secret = secret
  }

  /*
  *
  * Public methods
  *
  */

  get_currencies(callback) {
    return public_api('getcurrencies', null, null, callback)
  }

  get_trade_pairs(callback) {
    return public_api('gettradepairs', null, null, callback)
  }

  get_markets(callback) {
    return public_api('getmarkets', null, null, callback)
  }

  get_market(params, callback) {
    return public_api('getmarket', params, '/', callback)
  }

  get_market_history(params, callback) {
    return public_api('getmarkethistory', params, '/', callback)
  }

  get_market_orders(params, callback) {
    return public_api('getmarketorders', params, '-', callback)
  }

  /*
  *
  * Private methods
  *
  */

  get_balance(data, callback) {
    return private_api('getbalance', this, data, callback)
  }

  get_deposit_address(data, callback) {
    return private_api('getdepositaddress', this, data, callback)
  }

  get_open_orders(data, callback) {
    return private_api('getopenorders', this, data, callback)
  }

  get_trade_history(data, callback) {
    return private_api('gettradehistory', this, data, callback)
  }

  get_transactions(data, callback) {
    return private_api('gettransactions', this, data, callback)
  }

  submit_trade(data, callback) {
    return private_api('submittrade', this, data, callback)
  }

  cancel_trade(data, callback) {
    return private_api('canceltrade', this, data, callback)
  }

  submit_tip(data, callback) {
    return private_api('submittip', this, data, callback)
  }

  submit_withdraw(data, callback) {
    return private_api('submitwithdraw', this, data, callback)
  }

  submit_transfer(data, callback) {
    return private_api('submittransfer', this, data, callback)
  }
}

export default Cryptopia
