import React from 'react'

function Modal(props) {
	return (
		<div
			id="large-modal"
			tabIndex="-1"
			className="fixed top-0 left-0 right-0 z-50 w-full p-[10px] overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] max-h-full items-center content-center justify-center flex modal bg-black bg-opacity-30"
		>
			<div className="relative w-full max-w-3xl max-h-full">
				<div className="relative bg-white rounded-lg shadow">
					<div className="flex items-center justify-center p-5 border-b rounded-t ">
						<h1 className="text-bold text-2xl font-medium text-gray-900 ">{props.title}</h1>
						<button
							onClick={() => {
								props.onClose()
							}}
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-hide="large-modal"
						>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>
					<div className="p-[30px]">{props.content ? props.content() : null}</div>
					{props.footer && <div className="flex items-center p-[10px] space-x-2 border-t border-gray-200 rounded-b ">{props.footer()}</div>}
				</div>
			</div>
		</div>
	)
}

export default Modal
