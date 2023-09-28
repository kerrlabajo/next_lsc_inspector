<<<<<<< HEAD
import { useState } from 'react'
import FilesServices from '@services/FilesServices'

const useDemoAnalyze = () => {
    const [analyzing, setAnalyzing] = useState(false);

    const analyze = async (file) => {
        try {
            setAnalyzing(true);
            const response = await FilesServices.demoAnalyze(file);
            if (response.status === 200){
                return response.data
            } else {
                throw new Error(`Error analyzing file: ${response.statusText}`);
            }
        } catch (error) {
            throw new Error(`Error analyzing file: ${error.message}`);
        } finally {
            setAnalyzing(false);
        }
    };

    return { uploadFile: analyze, uploading: analyzing }
}

export default useDemoAnalyze
=======
'use client'

import { useState } from 'react'
import FilesServices from '@services/FilesServices'

const useAnalyze = () => {
	const [isAnalyzing, setIsAnalyzing] = useState(false)

	const analyzeFile = async ({ url }) => {
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
>>>>>>> 29f1f22 (Implement analyze in demo page)
