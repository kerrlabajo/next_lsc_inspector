import axios from 'axios'
import config from './config'

const BASE_URL = `${config.API_URL}/files`

const FilesServices = {
<<<<<<< HEAD
    upload: (file, token) => axios.post(`${BASE_URL}/upload`, file, { headers : {
         Authorization : token,
         "Content-Type": "multipart/form-data"
    } }),
=======
	upload: (body) => axios.post(`${BASE_URL}/upload`, body),
>>>>>>> 5e7c81659f74023a86be6527e0f87a9264124e18
	analyze: (file) => axios.post(`${BASE_URL}/analyze`, file),
	getAll: () => axios.get(`${BASE_URL}`),
	getById: (id) => axios.get(`${BASE_URL}/${id}`),
	demoAnalyze: () => axios.get(`${BASE_URL}/${id}`),
}

export default FilesServices
