import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const ArticlesPage = ({ frontmatter, slug, content }) => {
	return (
		<div>
			<h1>Crypto article page</h1>
		</div>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('articles/crypto-articles'));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}));
	console.log(paths);
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join('articles/crypto-articles', slug + '.md'),
		'utf-8'
	);
	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}

export default ArticlesPage;
