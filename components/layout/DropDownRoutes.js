import Link from 'next/link';

const DropDownRoutes = ({ setToggleNav }) => {
	const handleClick = () => {
		setToggleNav(false);
	};

	return (
		<div className='grid bg-gray-50 text-gray-800 tracking-wide mx-4'>
			<Link href={'cryptocurrency'}>
				<a className='nav-link' onClick={handleClick}>
					CRYPTO CURRENCY
				</a>
			</Link>
			<Link href={'personal-finance'}>
				<a className='nav-link' onClick={handleClick}>
					PERSONAL FINANCE
				</a>
			</Link>
		</div>
	);
};

export default DropDownRoutes;
