import React from 'react'

function Modal(props) {
	return (
		<div
			id="large-modal"
			tabindex="-1"
			className="fixed top-0 left-0 right-0 z-50 w-full p-[10px] overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] max-h-full items-center content-center justify-center flex modal bg-black bg-opacity-30"
		>
			<div className="relative w-full max-w-3xl max-h-full">
				<div className="relative bg-white rounded-lg shadow">
					<div className="flex items-center justify-center p-5 border-b rounded-t ">
						<h1 className="text-bold text-2xl font-medium text-gray-900 ">{props.title}</h1>
					</div>
					<div className="p-[30px]">{props.content ? props.content() : null}</div>
					{props.footer && <div className="flex items-center p-[10px] space-x-2 border-t border-gray-200 rounded-b ">{props.footer()}</div>}
				</div>
			</div>
		</div>
	)
}

export default Modal
