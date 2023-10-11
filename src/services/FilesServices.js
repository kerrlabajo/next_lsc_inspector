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
	analyze: (url, project_name, api_key, version, token) =>
		axios.post(
			`${BASE_URL}/analyze`,
			{ url: url, project_name: project_name, api_key: api_key, version: version },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		),
	download: (token, id, destination) =>
		axios.post(
			`${BASE_URL}/download`,
			{ id: id, destination: destination },
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
	deleteAll: (token) =>
		axios.delete(`${BASE_URL}/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}),
	deleteById: (token, id) =>
		axios.delete(`${BASE_URL}/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}),
}

export default FilesServices
