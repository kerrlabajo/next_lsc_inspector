const Card = (props) => {
	return (
		<div className="bg-white w-full h-full min-h-[150px] p-[20px] flex flex-col justify-between shadow rounded-md">
			<div className="h-1/3 flex justify-between">
				<spa className="font-bold">{props.title}</spa>
				<span className="text-primary">+3.12%</span>
			</div>
			<div className="h-2/3 flex items-center justify-between">
				<div className="h-full flex items-center gap-2">
					<span className="text-xl font-bold">{props.data?.length} </span>
					<span>images</span>
				</div>
				<div className="h-full flex items-center text-xl">{((props.data?.length / props.total) * 100).toFixed(0)}%</div>
			</div>
		</div>
	)
}

export default Card
