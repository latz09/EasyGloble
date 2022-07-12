
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div>
			<div className='sticky top-0 z-50' id='top'>
				<Navbar />
			</div>
			<main className='relative'>{children}</main>
			
		</div>
	);
};

export default Layout;
