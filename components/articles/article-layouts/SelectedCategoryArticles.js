import ArticleItem from '../ArticleItem';

const SelectedCategoryArticles = ({ articles }) => {


// SET STATE HERE>??



	return (
		<div className="grid md:grid-cols-2 gap-2 md:gap-7  mx-auto justify-items-center">
			{articles.map((article) => (
				<div key={article.slug} >
					<ArticleItem
						category={article.details.category}
						title={article.details.title}
						excerpt={article.details.excerpt}
						author={article.details.author}
						image={article.details.cover_image}
						date={article.details.date}
						tags={article.details.tags}
                        
					/>
				</div>
			))}
		</div>
	);
};

export default SelectedCategoryArticles;
