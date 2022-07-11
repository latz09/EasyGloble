import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';

const DropDownNav = ({ setToggleNav, toggleNav }) => {
	console.log(toggleNav);
	return (
		<div className='flex space-x-5 text-2xl'>
			{' '}
			<div className='flex items-center'>
				<Link href={'/'}>
					<a>
						<AiFillHome />
					</a>
				</Link>
			</div>
			<div className='flex items-center'>
				<button
					onClick={() => {
						setToggleNav(!toggleNav);
					}}
				>
					<GiHamburgerMenu />
				</button>
			</div>
		</div>
	);
};

export default DropDownNav;
