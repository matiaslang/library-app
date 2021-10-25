import GetParameters from './GetParameters'
import axios from 'axios'

const aws = require('aws-sdk')

const clientIdRoute = '/amplify/d3ony1n7th0fhq/default/client_id'
const clientSecretRoute = '/amplify/d3ony1n7th0fhq/default/client_secret'
const audienceRoute = '/amplify/d3ony1n7th0fhq/default/audience'
const url = 'https://dev-ozku5027.us.auth0.com/oauth/token'

const parameterNames = [audienceRoute, clientIdRoute, clientSecretRoute]

const getParams = async () => {
  var parameters = await GetParameters(parameterNames, 'eu-north-1')
  return parameters
}

const GetToken = async () => {
  const params = await getParams()
  const clientId = params[clientIdRoute]
  const clientSecret = params[clientSecretRoute]
  const audience = params[audienceRoute]

  var postData = {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
    audience: audience,
  }
  var axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': 'true',
    },
  }

  return axios
    .post(url, postData, { axiosConfig })
    .then((res) => {
      var token = res.data.access_token
      return token
    })
    .catch((err) => {
      console.log('AXIOS ERROR: ', err)
    })
}

export default GetToken
