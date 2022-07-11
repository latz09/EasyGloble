import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className='max-w-7xl mx-auto'>
			<Layout>
				<div className="px-7">
					<Component {...pageProps} />
				</div>
			</Layout>
		</div>
	);
}

export default MyApp;
