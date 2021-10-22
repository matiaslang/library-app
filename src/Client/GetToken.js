import GetParameters from './GetParameters'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

const aws = require('aws-sdk')

const parameterNames = [
  '/amplify/d3ony1n7th0fhq/default/audience',
  '/amplify/d3ony1n7th0fhq/default/client_id',
  '/amplify/d3ony1n7th0fhq/default/client_secret',
]

const getParams = async () => {
  var parameters = await GetParameters(parameterNames, 'eu-north-1')
  console.log(parameters['/amplify/d1w9s5avni0ilk/default/audience'])
  return parameters
}

const GetToken = async () => {
  const params = await getParams()
  console.log(params)
  const clientId = params['/amplify/d3ony1n7th0fhq/default/client_id']
  const clientSecret = params['/amplify/d3ony1n7th0fhq/default/client_secret']
  const audience = params['/amplify/d3ony1n7th0fhq/default/audience']
  console.log('PARMETERS HERE:')
  console.log(clientId)
  console.log(clientSecret)
  console.log(audience)

  var options = {
    method: 'POST',
    url: 'https://dev-wuhb2z2r.us.auth0.com/oauth/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      audience: audience,
    },
  }

  axios
    .request(options)
    .then(function (response) {
      console.log('YAY, SUCCESSS')
      console.log(response.data)
    })
    .catch(function (error) {
      console.log('OH NO; NO SUCCESS')
      console.error(error)
    })

  /*
  var postData = {
    grant_type: 'client_credentials',
    client_id: { clientId },
    client_secret: { clientSecret },
    audience: { audience },
  }
  var axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    },
  }
  

  await axios
    .post(
      'https://dev-wuhb2z2r.us.auth0.com/oauth/token',
      postData,
      axiosConfig
    )
    .then((res) => {
      res.headers('Access-Control-Allow-Origin', '*')
      console.log('RESPONSE IS FOLLOWING:', res)
    })
    .catch((err) => {
      console.log('AXIOS ERROR: ', err)
    })
  return 'token'

  */
}

export default GetToken
