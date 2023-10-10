import { useEffect, useState } from 'react'
import FilesServices from '@services/FilesServices'

const useFile = (token, id) => {
	const [isRetrieving, setIsRetrieving] = useState(false)
	const [file, setFile] = useState(null)

	useEffect(() => {
		const retrieveFile = async () => {
			setIsRetrieving(true)

			let responseCode
			let retrievedFile
			try {
				const { status, data } = await FilesServices.getById(token, id)
				responseCode = status
				retrievedFile = data
			} catch (error) {
				console.error('Error retrieving file:', error)
				responseCode = error.response
			}
			switch (responseCode) {
				case 200:
					setFile(retrievedFile)
					break
				case 401:
					await callback.invalidFields()
					break
				case 500:
					await callback.internalError()
					break
			}
		}
		retrieveFile()
	}, [])

	return { isRetrieving, file }
}

export default useFile
