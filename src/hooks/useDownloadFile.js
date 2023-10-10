import { useEffect, useState } from 'react'
import FilesServices from '@services/FilesServices'

const useDowloadFile = () => {
	const [isDownloading, setIsDownloading] = useState(false)

	const downloadFile = async (token,{ id, destination}) => {
		setIsDownloading(true)

		let responseCode	
		let downloadedFile
		try {
			const response = await FilesServices.download(token, id, destination)
			console.log("reponse: ", response)
			if (response) {
				return response
			} else {
				throw new Error(`Error analyzing file: ${response.statusText}`)
			}
		} catch (error) {
			console.error('Error downloading file:', error)
			responseCode = error.response
		}
	}

	return { downloadFile, isDownloading }
}

export default useDowloadFile
