'use client'

import { useState } from 'react'
import WeightsService from '@services/WeightsService'
import useUserStore from '@useStore'

const useCreateWeight = (token) => {
	const [isCreating, setIsCreating] = useState(false)
	const { user, login, logout, addWeights } = useUserStore()

	const createWeight = async ({ project_name, api_key, version, workspace, model_type, model_path, type, callback }) => {
		setIsCreating(true)
		let responseCode
		let weight

		try {
			const { status, data } = await WeightsService.create(token, {
				project_name,
				api_key,
				version,
				workspace,
				model_type,
				model_path,
				type,
			})

			responseCode = status
			weight = data
			user.weights.push(weight)
		} catch (error) {
			responseCode = error.response.status
		}

		switch (responseCode) {
			case 201:
				login(user.token, user)
				await callback.success()
				break
			case 401:
				logout()
				await callback.invalidFields()
				break
			case 409:
				await callback.existed()
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
