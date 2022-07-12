import { createContext, useState } from 'react';

const FeaturedContext = createContext({});

const FeaturedProvider = ({ children }) => {
	const [featuredArticles, setFeaturedArticles] = useState([]);

	return (
		<FeaturedContext.Provider value={{ setFeaturedArticles, featuredArticles }}>
			{children}
		</FeaturedContext.Provider>
	);
};

export { FeaturedProvider, FeaturedContext };
