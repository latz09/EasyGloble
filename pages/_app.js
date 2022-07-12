import { FeaturedProvider } from '../components/contexts/FeaturedContext';
import Layout from '../components/layouts/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<FeaturedProvider>
			<Layout>
				<div className='sm:px-7 max-w-7xl mx-auto'>
					<Component {...pageProps} />
				</div>
			</Layout>
		</FeaturedProvider> 
	);
}

export default MyApp;
