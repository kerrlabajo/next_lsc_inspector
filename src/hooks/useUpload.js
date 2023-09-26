import { useState } from 'react'
import FilesServices from '@services/FilesServices'
import useUserStore from './../useStore'

const useUpload = () => {
    const [uploading, setUploading] = useState(false);
    /*const headers = {
        'Authorization': user.access_token,
        // Add other headers if needed
    };*/
    //console.log(user.access_token)
    const uploadFile = async (file, headers) => {
        try {
            console.log(file)
            console.log(headers.Authorization)
            setUploading(true);
            const response = await FilesServices.upload(file, headers.Authorization);
            if (response.status === 201){
                return response
            }
        } catch (error) {
           // throw new Error(`Error uploading file: ${error.message}`);
           console.log(error)
        } finally {
            setUploading(false);
        }
    };

    return { uploadFile, uploading }
}

export default useUpload