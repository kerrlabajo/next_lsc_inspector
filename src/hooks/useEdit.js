import { useState } from 'react';
import UsersService from '@services/UsersService';

const useEdit = () => {
    const [editting, setEditting] = useState(false);

    const editFile = async ({id}, token) => {
        try {
            console.log(id)
            setEditting(true);
            const response = await UsersService.edit(id, token);
            if (response) {
                return response
            } else {
                throw new Error(`Error updating user: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error updating user:', error); // Log the specific error
        } finally {
            setEditting(false);
        }
    };


    return { editFile, editting };
}

export default useEdit;
