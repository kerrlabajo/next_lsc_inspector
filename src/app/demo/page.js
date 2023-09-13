'use client'
import Button from '@components/Button/page'
import React from 'react'

const Demo = () => {
	return (
		<div className="bg-white w-full h-[300vh] float-left px-[200px]">
			<div className=" h-[100vh] float-left text-neutral-900 w-full flex justify-center mt-[200px]">
				<div className="w-full flex flex-col gap-x-1 items-left justify-between mb-4 h-48 rounded shadow p-6">
					<h1 className="text-5xl font-bold">Upload your image</h1>
					<form
						method="POST"
						enctype="multipart/form-data"
						action="{{ url_for('input_file.insert_inputFile') }}"
						className="flex justify-between"
					>
						<input
							type="file"
							name="file"
							accept=".txt, .pdf, .png, .jpg, .jpeg, .gif"
						/>
						<Button
							title="Upload"
							style=" bg-green-400 text-white hover:bg-green-500"
							onClick={() => {}}
						/>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Demo
