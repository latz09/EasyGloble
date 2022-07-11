import { AiFillHome } from 'react-icons/ai';
import Link from "next/link";

const FullNav = () => {
	return (
		<div className='flex space-x-8 items-center'>
			<Link href={'/'}>
				<a className='text-3xl nav-link'>
					<AiFillHome />
				</a>
			</Link>
			<Link href={'cryptocurrency'}>
				<a className="nav-link">CRYPTO CURRENCY</a>
			</Link>
			<Link href={'personal-finance'}>
				<a className="nav-link">PERSONAL FINANCE</a>
			</Link>
		</div>
	);
};

export default FullNav;
