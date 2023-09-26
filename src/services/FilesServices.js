import axios from 'axios'
import config from './config'

const BASE_URL = `${config.API_URL}/files`

const FilesServices = {
	upload: (body) => axios.post(`${BASE_URL}/upload`, body),
	analyze: (file) => axios.post(`${BASE_URL}/analyze`, file),
	getAll: () => axios.get(`${BASE_URL}`),
	getById: (id) => axios.get(`${BASE_URL}/${id}`),
	demoAnalyze: () => axios.get(`${BASE_URL}/${id}`),
}

export default FilesServices
