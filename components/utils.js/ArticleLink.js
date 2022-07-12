import Link from 'next/link';

const ArticleLink = ({ text, href }) => {
	return (
		<>
			<Link href={href}>
				<div className='article-link'>
					{text}
				</div>
			</Link>
		</>
	);
};

export default ArticleLink;
