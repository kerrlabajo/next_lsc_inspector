import axios from 'axios'
import config from '@services/config'


 const configureAxios = () => {
  axios.defaults.baseURL = config.API_URL
  axios.defaults.timeout = 40000
  axios.defaults.headers.common['Content-Type'] = 'application/json'

  // add a request interceptor to all the axios requests
  // that are going to be made in the site. The purpose
  // of this interceptor is to verify if the access token
  // is still valid and renew it if needed and possible
  axios.interceptors.request.use(
    (requestConfig) => {
      // if the current request doesn't include the config's base
      // API URL, we don't attach the access token to its authorization
      // because it means it is an API call to a 3rd party service
      if (requestConfig.baseURL !== config.API_URL) {
        return requestConfig
      }

      // Get access token from cookies for every api request
      /*const userData = JSON.parse(localStorage.getItem("userAuth"))
      const accessToken = userData.state.user.user.access_token
      requestConfig.headers.authorization = accessToken
        ? `Bearer ${accessToken}`
        : null*/

      return requestConfig
    },
    (error) => Promise.reject(error)
  )

  axios.interceptors.response.use(null, async (error) => {
    //const originalRequest = error.config;
    if ( error.response && error.response.status === 401 /*&& !originalRequest._retry */) {
      console.log("EXPIRED TOKEN!")
      // Attempt to refresh the token
      if (typeof localStorage !== "undefined") {
        const userData = JSON.parse(localStorage.getItem('userAuth'))
        const refreshToken = userData.state.user.user.refresh_token
        try {
          const response = await axios.get(`${config.API_URL}/users/token/refresh`, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
              'Content-Type': 'application/json'
          }});
          const newAccessToken = response.data.access

          // Update the access token in local storage
          userData.state.user.user.access_token = newAccessToken
          userData.state.token = newAccessToken
          console.log(userData)
          localStorage.setItem('userAuth', JSON.stringify(userData))
          location.reload();
          // Retry the original request
         // originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          //return configureAxios(originalRequest);
          return Promise.resolve(response);
        } catch (refreshError) {
          // If token refresh fails, redirect to login or handle it as per your app's requirements
          // For example:
          if (refreshError.response.status === 401) {
            // Redirect to login page
            // window.location.href = '/login';
          }

          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error)
  })
}
export default configureAxios;
