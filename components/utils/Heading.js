const Heading = ({ title }) => {
	return (
		<div className='border-b-2 text-white border-globleBlue-500 font-thin text-2xl flex mt-12'>
			<h1 className='px-2 py-1 bg-globleBlue-500'>{title}</h1>
		</div>
	);
};

export default Heading;
