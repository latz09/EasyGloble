import Link from 'next/link';
import { formatLinks } from '../../helpers/formatLink';
import ArticleLink from '../utils/ArticleLink';
import ArticleImage from './ArticleImage';
import ArticleTitle from './ArticleTitle';

const FeaturedArticleItem = ({
	image,
	author,
	date,
	title,
	slug,
	category,
}) => {
	const links = formatLinks(category, slug);

	return (
		<Link href={links.article}>
			<a>
				<div className='grid grid-cols-2'>
					<ArticleImage src={image} alt='' height={50} width={90} />
					<div className='grid justify-items-end justify-end'>
						<ArticleLink text={category} href={links.page} />
						<div className='flex space-x-3 place-items-end px-1 opacity-60'>
							<span>{author}</span>
							<span>{date}</span>
						</div>
					</div>
				</div>
				<ArticleTitle
					title={title}
					styles={'text-base px-2 py-2 text-gray-800'}
				/>
			</a>
		</Link>
	);
};

export default FeaturedArticleItem;
