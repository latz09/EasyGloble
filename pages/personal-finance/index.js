import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link'

const PersonalFinance = ({articles}) => {
	const article = (articles[0].slug)
console.log(article)
	return (
		<div className='text-center mt-14'>
			<h1>Personal finance page</h1>
			<Link href={`/articles/personal-finance-articles/${article}`}>article</Link>
		</div>
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

		return {
			slug,
			data,
		};
	});

	return {
		props: {
			articles,
		},
	};
}

export default PersonalFinance;

