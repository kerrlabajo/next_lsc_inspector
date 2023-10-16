'use client'

import { useState } from 'react'
import FilesServices from '@services/FilesServices'

const useAnalyze = () => {
	const [isAnalyzing, setIsAnalyzing] = useState(false)

	const analyzeFile = async ({ url, callback }) => {
		setIsAnalyzing(true)

		let responseCode
		let fileAnalyzed

		try {
			const { status, data } = await FilesServices.demoAnalyze({ url })

			responseCode = status
			fileAnalyzed = data
			return { data, status }
		} catch (error) {
			responseCode = error.response.status
		}

		switch (responseCode) {
			case 201:
				await callback.success()
				break
			case 401:
				await callback.invalidFields()
				break
			case 500:
				await callback.internalError()
				break
		}

		setIsAnalyzing(false)
	}
	return { isAnalyzing, analyzeFile }
}

export default useAnalyze
