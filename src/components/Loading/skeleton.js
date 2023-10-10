import React from 'react'

function Skeleton() {
	return (
		<div className="w-full float-left">
			<div
				role="status"
				className="w-full rounded animate-pulse"
			>
				<div className="w-full">
					<div className="h-[30px] bg-gray-300 rounded-lg w-full mb-[20px]"></div>
				</div>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	)
}

export default Skeleton
