import { useState } from 'react'
import FilesServices from '@services/FilesServices'

const useAnalyze = () => {
	const [isRetrieving, setIsRetrieving] = useState(false)

	const retrieveFiles = async ({ id }, token) => {
		try {
			console.log(fileUrl)
			setIsRetrieving(true)
			const response = await FilesServices.getAll(id, token)
			if (response) {
				return response
			} else {
				throw new Error(`Error retrieving file: ${response.statusText}`)
			}
		} catch (error) {
			console.error('Error retrieving file:', error)
		} finally {
			setIsRetrieving(false)
		}
	}

	return { retrieveFiles, isRetrieving }
}

export default useAnalyze
