import Image from 'next/image';

const ArticleImage = ({src, height, width}) => {
	return (
		<>
			<Image src={src} alt='' height={height} width={width} layout='responsive' />
		</>
	);
};

export default ArticleImage;
