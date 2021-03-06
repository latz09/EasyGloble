const Details = ({ date, author, tags }) => {
	
	return (
		<>
			<ul className='flex space-x-6 opacity-60 '>
				<li>{date}</li>
				<li>{author}</li>
				<li>0 Comments</li>
			</ul>
            <ul className="flex flex-wrap space-x-2 opacity-60 tracking-tighter ">
                {tags.map(tag => (
                    <li key={tag}>{tag},</li>
                ))}
            </ul>
		</>
	);
};

export default Details;
