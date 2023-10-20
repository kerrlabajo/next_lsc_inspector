import { isLocal } from '../utils/destinations'

let apiUrl = null

if (isLocal) {
	apiUrl = 'http://localhost:5000/api/v1'
} else {
	// Production
	apiUrl = 'https://lsc-inspector-908ed02924c7.herokuapp.com/api/v1'
}

const config = {
	API_URL: apiUrl,
}

export default config
