'use client'

import { useState } from 'react'
import WeightsService from '@services/WeightsService'

const useCreateWeight = (token) => {
	const [isCreating, setIsCreating] = useState(false)

	const createWeight = async ({ project_name, api_key, version, workspace, model_type, model_path, callback }) => {
		setIsCreating(true)

		let responseCode
		let retrievedUser

		try {
			const { status, data } = await WeightsService.create(token, {
				project_name,
				api_key,
				version,
				workspace,
				model_type,
				model_path,
			})

			responseCode = status
			retrievedUser = data
		} catch (error) {
			responseCode = error.response.status
		}

		switch (responseCode) {
			case 200:
				break
			case 401:
				await callback.invalidFields()
				break
			case 500:
				await callback.internalError()
				break
		}

		setIsCreating(false)
	}

	return { isCreating, createWeight }
}

export default useCreateWeight
