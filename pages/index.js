import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { useEffect, useContext } from 'react';
import { FeaturedContext } from '../components/contexts/FeaturedContext';
import SelectedCategoryArticles from '../components/articles/article-layouts/SelectedCategoryArticles';
import Heading from '../components/utils/Heading';
import FeaturedArticles from '../components/articles/article-layouts/FeaturedArticles';

const Home = ({ cryptoArticles, personalFinanceArticles }) => {
	const { featuredArticles, setFeaturedArticles } = useContext(FeaturedContext);

	useEffect(() => {
		setFeaturedArticles(cryptoArticles);
	}, [cryptoArticles, setFeaturedArticles]);

	return (
		<div className='grid lg:grid-cols-3'>
			<div className='grid gap-4 lg:col-span-2'>
				<div>
					<Heading title='Crypto Currency' />
					<SelectedCategoryArticles articles={cryptoArticles} />
				</div>
				<div>
					<Heading title='Personal Finance' />
					<SelectedCategoryArticles articles={personalFinanceArticles} />
				</div>
			</div>
			<div className="shadow my-24">
				<FeaturedArticles featuredArticles={featuredArticles} />
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const cryptoFiles = fs.readdirSync(path.join('articles/crypto-articles'));
	const financeFiles = fs.readdirSync(
		path.join('articles/personal-finance-articles')
	);

	const cryptoArticles = cryptoFiles.map((filename) => {
		const slug = filename.replace('.md', '');

		const markdownWithMeta = fs.readFileSync(
			path.join('articles/crypto-articles', filename),
			'utf-8'
		);

		const { data } = matter(markdownWithMeta);

		const details = { ...data, slug };

		return {
			details,
		};
	});

	const personalFinanceArticles = financeFiles.map((filename) => {
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
			cryptoArticles,
			personalFinanceArticles,
		},
	};
}

export default Home;
