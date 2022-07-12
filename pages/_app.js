import { FeaturedProvider } from '../components/contexts/FeaturedContext';
import Layout from '../components/layouts/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<FeaturedProvider>
			<Layout>
				<div className='px-7 mx-auto'>
					<Component {...pageProps} />
				</div>
			</Layout>
		</FeaturedProvider> 
	);
}

export default MyApp;
