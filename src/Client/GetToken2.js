import { useAuth0 } from '@auth0/auth0-react'

const GetToken2 = async () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const domain = 'dev-wuhb2z2r.us.auth0.com'

  const accessToken = await getAccessTokenSilently({
    audience: `https://${domain}/api/v2/`,
    scope: 'read:current_user',
  })
  console.log(accessToken)
  return accessToken
}

export default GetToken2
