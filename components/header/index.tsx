"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu and Close icons
import Logo from "@/app/assets/images/Logo.png";
import Dropdown from "../dropdown";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<header className='bg-gray-900 text-white shadow-md p-4 fixed top-0 left-0 w-full z-50'>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				<Link href='/' className='flex items-center'>
					<Image
						src={Logo}
						alt='Logo'
						width={300}
						height={50}
						className='h-10 w-full mr-4 hover:cursor-pointer'
					/>
				</Link>

				<nav className='hidden md:flex space-x-6'>
					<Link href='/' className='hover:text-gray-300 transition'>
						Home
					</Link>

					<Dropdown
						label='Features'
						items={[
							{ href: "/tailwind", label: "Tailwind Design" },
							{ href: "/web3", label: "Web3 Features" },
							{
								href: "/dashboard",
								label: "Dashboards & Tables",
							},
						]}
					/>

					<Link
						href='/about'
						className='hover:text-gray-300 transition'
					>
						About
					</Link>
					<Link
						href='/contact'
						className='hover:text-gray-300 transition'
					>
						Contact
					</Link>
				</nav>

				<div className='md:hidden flex items-center'>
					<button onClick={toggleMenu} className='focus:outline-none'>
						{isOpen ? (
							<AiOutlineClose className='w-8 h-8 text-white' />
						) : (
							<AiOutlineMenu className='w-8 h-8 text-white' />
						)}
					</button>
				</div>
			</div>

			{isOpen && (
				<div className='md:hidden mt-4 space-y-4 bg-gray-800 p-4 rounded-lg'>
					<Link
						href='/'
						className='block hover:text-gray-300 transition'
					>
						Home
					</Link>

					<Dropdown
						label='Features'
						items={[
							{ href: "/tailwind", label: "Tailwind Design" },
							{ href: "/web3", label: "Web3 Features" },
							{
								href: "/dashboard",
								label: "Dashboards & Tables",
							},
						]}
					/>

					<Link
						href='/about'
						className='block hover:text-gray-300 transition'
					>
						About
					</Link>
					<Link
						href='/contact'
						className='block hover:text-gray-300 transition'
					>
						Contact
					</Link>
				</div>
			)}
		</header>
	);
}
