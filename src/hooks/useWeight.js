'use client'

import { useState, useEffect } from 'react'
import WeightsService from '@services/WeightsServiceS'

const useWeight = (token) => {
	const [isCreating, setIsCreating] = useState(false)
	const [weight, setWeight] = useState(null)

	useEffect(() => {
		const getWeights = async ({ id, callback }) => {
			setIsCreating(true)

			let responseCode
			let retrievedWeights

			try {
				const { status, data } = await WeightsService.getAll(token, id)

				responseCode = status
				retrievedWeights = data
			} catch (error) {
				console.log(error)
				responseCode = error.response.status
			}

			switch (responseCode) {
				case 200:
					setWeights(retrievedWeights)
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
		getWeights()
	}, [])

	return { isCreating, weight }
}

export default useWeight
