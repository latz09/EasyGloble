import Image from 'next/image';
import Category from '../utils.js/Category';
import ArticleImage from './ArticleImage';
import ArticleTitle from './ArticleTitle';
import Details from './Details';

const ArticleItem = ({
	category,
	title,
	excerpt,
	author,
	image,
	date,
	tags,
}) => {
    
	return (
		<div className='grid mx-auto gap-2 shadow pb-10'>
			<ArticleImage src={image} alt='' height={340} width={600} />
			<div className="grid gap-2 mt-3 px-2">
				<Category text={category} />
				<ArticleTitle title={title} />
				<Details date={date} author={author} tags={tags} />
			</div>
		</div>
	);
};

export default ArticleItem;
