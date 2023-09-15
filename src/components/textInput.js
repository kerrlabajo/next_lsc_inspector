import React from 'react'
import validator from '@utils/validator'

function Text(props) {
	const { validation, type } = props

	const validations = (e) => {
		let response = validation ? validator.validate(e.target.value, validation, validation.column) : false
		if (response === true) {
			if (type === 'file') {
				props.onChange(e.target.files[0], null)
			} else {
				props.onChange(e.target.value, null)
			}
		} else {
			if (type === 'file') {
				props.onChange(e.target.files[0], response)
			} else {
				props.onChange(e.target.value, response)
			}
		}
	}

	return (
		<div>
			<input
				name={props.name}
				id={props.id}
				placeholder={props.placeholder}
				type={props.type}
				value={props.value}
				disabled={props.disable ? props.disable : false}
				onChange={(e) => {
					validations(e)
				}}
				onKeyDown={(e) => {
					if (props.onEnter && e.key == 'Enter') {
						props.onEnter()
					}
				}}
				className={
					'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' +
					(props.style ? props.style : 'bg-gray-50 text-gray-900')
				}
			></input>
			<div className="w-full">
				{props.validation && props.validation.error && (
					<label className="text-red-600">
						<b>Oops!</b> {props.validation.error}
					</label>
				)}
			</div>
		</div>
	)
}

export default Text
