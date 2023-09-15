import Spinner from '@components/Spinner/page'

const Button = (props) => {
	return (
		<div
			onClick={() => {
				props.onClick()
			}}
			className={
				'px-[40px] pr-[40px] h-[45px] lg:pr-[20px] lg:px-[20px] cursor-pointer content-center items-center justify-center float-left flex rounded-[10px]' +
				props.style
			}
		>
			{props.title}

			{props.loading && (
				<span className="ml-[10px]">
					<Spinner />
				</span>
			)}
		</div>
	)
}

export default Button
