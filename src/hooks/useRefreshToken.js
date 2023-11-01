import { useState, useEffect } from 'react'
import useUserStore from '../useStore'
import UsersService from '@services/UsersService'

const useRefreshToken = () => {
    const { logout } = useUserStore.getState();
    const [isRefreshing, setIsRefreshing] = useState(false)

    const refreshToken = async (token) => {
        const userData = JSON.parse(localStorage.getItem('userAuth'))

        try {
            setIsRefreshing(true)
            const response = await UsersService.refreshToken(token)
            const newAccessToken = response.data.access
            userData.state.user.user.access_token = newAccessToken

            // Update the stored access token
            localStorage.setItem('userAuth', JSON.stringify(userData))

            // Retry the original request or perform any necessary action
            // ...

            setIsRefreshing(false);
        } catch (error) {
            console.error('Error refreshing token:', error)
            //logout()
            setIsRefreshing(false);
        }
    };

    return { isRefreshing, refreshToken }
};

export default useRefreshToken
