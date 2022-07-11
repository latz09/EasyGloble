import DropDownNav from './DropDownNav';
import DropDownRoutes from './DropDownRoutes';
import FullNav from './fullNav';
import { useState } from 'react';

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false);
	return (
		<>
			{' '}
			<div className='bg-globleBlack-500 h-14 text-gray-100 border-t-4 border-globleBlue-500 grid items-center px-4'>
				<div className='hidden md:block'>
					<FullNav />
				</div>
				<div className='md:hidden'>
					<DropDownNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
				</div>
			</div>
			<div className="md:hidden">
			{toggleNav && <DropDownRoutes setToggleNav={setToggleNav} />}
			</div>
		</>
	);
};

export default Navbar;
