import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className=''>
			<Layout>
				<div className="px-7 mx-auto">
					<Component {...pageProps} />
				</div>
			</Layout>
		</div>
	);
}

export default MyApp;
