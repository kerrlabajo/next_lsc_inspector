import React from 'react'

function Skeleton(props) {
	return (
		<div className="w-full float-left">
			<div
				role="status"
				className="w-full rounded animate-pulse"
			>
				<div className="w-full">
					<div className={`${props.style ? props.style : `h-[30px]`} bg-gray-400 rounded-lg w-full mb-[20px]`}></div>
				</div>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	)
}

export default Skeleton
