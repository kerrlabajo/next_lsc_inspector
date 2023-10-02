import axios from 'axios'
import config from './config'

const BASE_URL = `${config.API_URL}/users`

const UsersService = {
	signup: (user) => axios.post(`${BASE_URL}/register`, user),
	login: (user) => axios.post(`${BASE_URL}/login`, user),
	edit: (id, token) => axios.post(`${BASE_URL}/edit`, { id: id },
	{
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}),
}

export default UsersService
