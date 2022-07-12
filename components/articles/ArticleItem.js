import ArticleLink from '../utils.js/ArticleLink';
import ArticleImage from './ArticleImage';
import ArticleTitle from './ArticleTitle';
import Details from './Details';
import Excerpt from './Excerpt';

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
	const formatLink = () => {
		let articleLink;
		if (category === 'Personal Finance') {
			articleLink = `articles/personal-finance/${slug}`;
		} else if (category === 'Crypto Currency') {
			articleLink = `articles/crypto/${slug}`;
		}
		return articleLink;
	};

	let articleLink = formatLink();

	return (
		<div className='grid mx-auto gap-2 shadow pb-10'>
			<ArticleImage src={image} alt='' height={340} width={600} />
			<div className='grid gap-2 mt-3 px-2'>
				<ArticleLink text={category} href={'/cryptocurrency'} />
				<ArticleTitle title={title} />
				<Details date={date} author={author} tags={tags} />
				<Excerpt excerpt={excerpt} />
				<ArticleLink text='Read more' href={articleLink} />
			</div>
		</div>
	);
};

export default ArticleItem;
