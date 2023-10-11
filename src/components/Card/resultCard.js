const ResultCard = (props) => {
	return (
		<div
			className="bg-blue-50 w-full h-full min-h-[200px] p-[20px] flex flex-col justify-between shadow rounded-md"
			key={props.key}
		>
			<div className="h-1/3 flex justify-between">
				<span className="text-xl font-bold">{props.data.name}</span>
				<span className="text-green-400">Successful</span>
			</div>
			<div className="h-2/3 flex flex-col">
				<span>
					Classification:{' '}
					<span className={` ${props.data.classification === 'Good' ? `text-green-400` : `text-red-400`} font-bold`}>
						{props.data.classification}
					</span>
				</span>
				<span>Accuracy: {props.data.accuracy}</span>
			</div>
		</div>
	)
}

export default ResultCard
