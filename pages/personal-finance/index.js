import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PersonalFinance = ({articles}) => {


	return (
		<div className='text-center mt-14'>
			<h1>Personal finance page</h1>
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

