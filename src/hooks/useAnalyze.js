import { useState } from 'react';
import FilesServices from '@services/FilesServices';

const useAnalyze = () => {
    const [analyzing, setAnalyzing] = useState(false);

    const analyzeFile = async ({fileUrl}, token) => {
        try {
            console.log(fileUrl)
            setAnalyzing(true);
            const response = await FilesServices.analyze(fileUrl, token);
            if (response) {
                return response
            } else {
                throw new Error(`Error analyzing file: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error analyzing file:', error); // Log the specific error
        } finally {
            setAnalyzing(false);
        }
    };


    return { analyzeFile, analyzing };
}

export default useAnalyze;
