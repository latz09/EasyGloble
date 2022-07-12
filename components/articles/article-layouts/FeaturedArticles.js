import ArticleImage from '../ArticleImage';
import ArticleTitle from '../ArticleTitle';
import FeaturedArticleItem from '../FeaturedArticleItem';

const FeaturedArticles = ({ featuredArticles }) => {
	
	return (
		<div className='grid gap-5 md:ml-12'>
			{featuredArticles.map((article) => (
				<div key={article.details.slug}>
					<FeaturedArticleItem
						image={article.details.cover_image}
						author={article.details.author}
						date={article.details.date}
						title={article.details.title}
						slug={article.details.slug}
                        category={article.details.category}
					/>
				</div>
			))}
		</div>
	);
};

export default FeaturedArticles;
