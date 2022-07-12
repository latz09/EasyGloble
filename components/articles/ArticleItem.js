import Link from 'next/link';
import ArticleLink from '../utils/ArticleLink';
import ArticleImage from './ArticleImage';
import ArticleTitle from './ArticleTitle';
import Details from './Details';
import Excerpt from './Excerpt';
import { formatLinks } from '../../helpers/formatLink';

const ArticleItem = ({
	category,
	title,
	excerpt,
	author,
	image,
	date,
	tags,
	slug,
}) => {
	const links = formatLinks(category, slug);

	return (
		<Link href={links.article}>
			<div className='grid mx-auto gap-2 shadow pb-2 cursor-pointer hover:shadow-lg '>
				<ArticleImage src={image} alt='' height={340} width={600} />
				<div className='grid gap-2 mt-3 px-2'>
					<ArticleLink text={category} href={links.page} />
					<ArticleTitle title={title} />
					<Details date={date} author={author} tags={tags} />
					<Excerpt excerpt={excerpt} />
					<ArticleLink text='Read more' href={links.article} />
				</div>
			</div>
		</Link>
	);
};

export default ArticleItem;
