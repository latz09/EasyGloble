

export const formatLinks = (category, slug) => {
	let articleLink;
	let pageLink;

	if (category === 'Crypto Currency') {
		articleLink = `/articles/crypto/${slug}`;
		pageLink = '/cryptocurrency';
	} else {
		articleLink = `/articles/personal-finance/${slug}`;
		pageLink = '/personal-finance';
	}

    const links = {article: articleLink, page: pageLink}

    return links
};
