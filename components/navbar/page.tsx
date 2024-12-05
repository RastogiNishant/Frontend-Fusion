import Image from "next/image";
import Logo from "@/app/assets/images/Logo.png";

const Navbar = () => {
	return (
		<nav className='bg-red-900'>
			<div className='flex flex-shrink-0 items-center'>
				<Image
					src={Logo}
					alt='Logo'
					width={100}
					height={50}
					className='h-10 w-auto mr-4 hover:cursor-pointer'
				/>
			</div>
		</nav>
	);
};

export default Navbar;
