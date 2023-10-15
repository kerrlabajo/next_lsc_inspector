import { useState } from 'react'
import FilesServices from '@services/FilesServices'

const useAnalyze = () => {
	const [analyzing, setAnalyzing] = useState(false)

	const analyzeFile = async ({ fileUrl, project_name, api_key, version }, token) => {
		try {
			setAnalyzing(true)
			const response = await FilesServices.analyze(
				{
					fileUrl,
					project_name,
					api_key,
					version,
				},
				token
			)
			if (response) {
				return response
			} else {
				throw new Error(`Error analyzing file: ${response.statusText}`)
			}
		} catch (error) {
			console.log(error)
			console.error('Error analyzing file:', error)
		} finally {
			setAnalyzing(false)
		}
	}

	return { analyzeFile, analyzing }
}

export default useAnalyze
