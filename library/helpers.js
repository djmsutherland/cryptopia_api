import {
  createHash,
  createHmac
} from 'crypto'

import fetch from 'isomorphic-fetch'
import https from 'https'

/*
*
* Host
*
*/

const host = 'www.cryptopia.co.nz'

/*
*
* Base64
*
*/

function base_64(type, data, key) {
  switch (type) {
    case 'md5':
    return createHash(type).update(JSON.stringify(data)).digest().toString('base64')

    case 'sha256':
    return createHmac(type, new Buffer(key, 'base64')).update(data).digest().toString('base64')
  }
}

/*
*
* Process chunks
*
*/

function process_chunks(response, callback) {
  let text = ''

  response.on('data', (chunk) => text += chunk)
  response.on('end', () => callback(text))
}

/*
*
* Request options
*
*/

function request_options(cryptopia, path, data) {
  if (!data) data = {}

  const nonce = Math.floor(new Date().getTime() / 1000)
  const md5 = base_64('md5', data)
  const encode_uri = encodeURIComponent(`https://${host}/api/${path}`).toLowerCase()
  const sign = `${cryptopia.key}POST${encode_uri}${nonce}${md5}`
  const hmac = base_64('sha256', sign, cryptopia.secret)

  const headers = {
    'Authorization': `amx ${cryptopia.key}:${hmac}:${nonce}`,
    'Content-Type': 'application/json; charset=utf-8'
  }

  return {
    headers,
    host,
    path: `/api/${path}`,
    method: 'POST'
  }
}

/*
*
* Public API
*
*/

export function public_api(path, params, join, callback) {
  params
  ? path = `${path}/${params.join(join)}`
  : params = {}

  return fetch(`https://${host}/api/${path}`)
  .then((response) => response.json())
  .then((data) => callback(data))
  .catch((error) => callback(error))
}

/*
*
* Private API
*
*/

export function private_api(path, cryptopia, data, callback) {
  const options = request_options(cryptopia, path, data)
  const request = https.request(options, (response) => {
    process_chunks(response, callback)
  })

  request.write(JSON.stringify(data))
  request.end()
}
