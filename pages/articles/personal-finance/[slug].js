import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { useContext } from 'react';
import ArticleImage from '../../../components/articles/ArticleImage';
import ArticleLink from '../../../components/utils/ArticleLink';
import ArticleTitle from '../../../components/articles/ArticleTitle';
import Details from '../../../components/articles/Details';
import FeaturedArticles from '../../../components/articles/article-layouts/FeaturedArticles';
import { FeaturedContext } from '../../../components/contexts/FeaturedContext';

const ArticlesPage = ({ frontmatter, slug, content }) => {
	const { featuredArticles } = useContext(FeaturedContext);
	return (
		<div className="grid lg:grid-cols-3 gap-3 justif-items-center md:mt-12">
			<div className='grid shadow lg:col-span-2  sm:p-6'>
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
			<div className="mt-8">
				<FeaturedArticles featuredArticles={featuredArticles} />
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('articles/personal-finance-articles'));

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
		path.join('articles/personal-finance-articles', slug + '.md'),
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
