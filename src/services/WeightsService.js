import axios from 'axios'
import config from './config'

const BASE_URL = `${config.API_URL}/weights`

const WeightsService = {
	retrieveAll: () => axios.get(`${BASE_URL}`),
	retrieve: (weightId) => axios.get(`${BASE_URL}/${weightId}`, weightId),
	create: (weight) => axios.post(`${BASE_URL}/`, weight),
	delete: (weightId) => axios.delete(`${BASE_URL}/${weightId}`),
}

export default WeightsService
