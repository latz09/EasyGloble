const ArticleTitle = ({title, styles}) => {
	return (
		<>
			<h1 className={`text-2xl tracking-wide ${styles}`} >{title}</h1>
		</>
	);
};

export default ArticleTitle;
