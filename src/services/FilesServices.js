import axios from 'axios'
import config from './config'

const BASE_URL = `${config.API_URL}/files`

const FilesServices = {
    upload: (file, token) => axios.post(`${BASE_URL}/upload`, file, { headers : {
         Authorization : token,
         "Content-Type": "multipart/form-data"
    } }),
	analyze: (url, token) => axios.post(`${BASE_URL}/analyze`, { url : url }, { headers :{
        Authorization: `Bearer ${token}`
      } }),
	demoAnalyze: (url) => axios.post(`${BASE_URL}/demo`, url),
	getAll: () => axios.get(`${BASE_URL}`),
	getById: (id) => axios.get(`${BASE_URL}/${id}`),
}

export default FilesServices
