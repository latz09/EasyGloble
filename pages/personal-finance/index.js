import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useContext } from 'react';
import { FeaturedContext } from '../../components/contexts/FeaturedContext';
import Heading from '../../components/utils/Heading';
import SelectedCategoryArticles from '../../components/articles/article-layouts/SelectedCategoryArticles';
import FeaturedArticles from '../../components/articles/article-layouts/FeaturedArticles';

const PersonalFinance = ({ articles }) => {
	const {featuredArticles} = useContext(FeaturedContext);
	
	return (
		<>
			<Heading title='Personal Finance' />
			<div className='grid gap-3 lg:grid-cols-3 mt-4'>
				<div className='col-span-2'>
					<SelectedCategoryArticles articles={articles} />
				</div>
				<div>
					<FeaturedArticles featuredArticles={featuredArticles} />
				</div>
			</div>
		</>
	);
};

export async function getStaticProps() {
	const files = fs.readdirSync(path.join('articles/personal-finance-articles'));

	const articles = files.map((filename) => {
		const slug = filename.replace('.md', '');

		const markdownWithMeta = fs.readFileSync(
			path.join('articles/personal-finance-articles', filename),
			'utf-8'
		);

		const { data } = matter(markdownWithMeta);

		const details = { ...data, slug };

		return {
			details,
		};
	});

	return {
		props: {
			articles,
		},
	};
}

export default PersonalFinance;
