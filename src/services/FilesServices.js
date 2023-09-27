import axios from 'axios'
import config from './config'

const BASE_URL = `${config.API_URL}/files`

const FilesServices = {
    upload: (file, token) => axios.post(`${BASE_URL}/upload`, file, { headers : {
         Authorization : token,
         "Content-Type": "multipart/form-data"
    } }),
	analyze: (file) => axios.post(`${BASE_URL}/analyze`, file),
	getAll: () => axios.get(`${BASE_URL}`),
	getById: (id) => axios.get(`${BASE_URL}/${id}`),
	demoAnalyze: () => axios.get(`${BASE_URL}/${id}`),
}

export default FilesServices
