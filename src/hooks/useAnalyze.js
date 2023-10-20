import { useState } from 'react'
import FilesServices from '@services/FilesServices'

const useAnalyze = () => {
	const [analyzing, setAnalyzing] = useState(false)
	const [result, setResult] = useState(null)

	const analyzeFile = async ({ fileUrl, project_name, api_key, version, weight_id ,callback }, token) => {
		setAnalyzing(true)
		let responseCode
		let analyzedImage

		try {
			const { status, data } = await FilesServices.analyze(
				{
					url: fileUrl,
					project_name,
					api_key,
					version,
					weight_id
				},
				token
			)
			analyzedImage = data
			responseCode = status

			return { data, status }
		} catch (error) {
			responseCode = error.response
		}
		switch (responseCode) {
			case 201:
				return setResult(analyzedImage)
			case 401:
				await callback.invalidFields()
				break
			case 500:
				await callback.internalError()
				break
		}
	}

	return { analyzeFile, analyzing }
}

export default useAnalyze
