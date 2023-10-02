import axios from 'axios'
import config from './config'

const BASE_URL = `${config.API_URL}/files`

const FilesServices = {
	upload: (file) =>
		axios.post(`${BASE_URL}/upload`, file, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}),
	analyze: (url, token) =>
		axios.post(
			`${BASE_URL}/analyze`,
			{ url: url },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		),
	demoAnalyze: (url) => axios.post(`${BASE_URL}/demo`, url),
	getAll: (token) =>
		axios.get(`${BASE_URL}/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}),
	getById: (token, id) =>
		axios.get(`${BASE_URL}/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}),
}

export default FilesServices
