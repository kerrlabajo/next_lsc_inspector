import { isLocal } from '../utils/destinations'

let apiUrl = null

if (isLocal) {
	apiUrl = 'http://localhost:5000/api/v1'
} else {
	// Production
	apiUrl = 'http://3.25.149.97:5000/api/v1'
}

const config = {
	API_URL: apiUrl,
}

export default config
