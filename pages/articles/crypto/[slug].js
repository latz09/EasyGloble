import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import ArticleImage from '../../../components/articles/ArticleImage';
import ArticleTitle from '../../../components/articles/ArticleTitle';
import ArticleLink from '../../../components/utils.js/ArticleLink';
import Details from '../../../components/articles/Details';

const ArticlesPage = ({ frontmatter, slug, content }) => {
	return (
		<div className='grid shadow w-2/3 p-6 2xl:mx-28'>
			<div>
				<ArticleImage
					src={frontmatter.cover_image}
					alt=''
					height={340}
					width={640}
				/>
				<div className='grid gap-2 mt-3 px-2 my-8'>
					<ArticleLink text={frontmatter.category} href={'/cryptocurrency'} />
					<ArticleTitle title={frontmatter.title} />
					<Details
						date={frontmatter.date}
						author={frontmatter.author}
						tags={frontmatter.tags}
					/>
				</div>
			</div>
			<div
				className='markdown-content'
				dangerouslySetInnerHTML={{ __html: marked(content) }}
			></div>
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
