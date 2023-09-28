import { useState } from 'react'
import FilesServices from '@services/FilesServices'

const useDemoAnalyze = () => {
	const [analyzing, setAnalyzing] = useState(false)

	const analyze = async (file) => {
		try {
			setAnalyzing(true)
			const response = await FilesServices.demoAnalyze(file)
			if (response.status === 200) {
				return response.data
			} else {
				throw new Error(`Error analyzing file: ${response.statusText}`)
			}
		} catch (error) {
			throw new Error(`Error analyzing file: ${error.message}`)
		} finally {
			setAnalyzing(false)
		}
	}

	return { uploadFile: analyze, uploading: analyzing }
}

export default useDemoAnalyze
