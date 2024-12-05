"use client";

import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Link from "next/link";

interface DropdownProps {
	label: string;
	items: { href: string; label: string }[];
}

export default function Dropdown({ label, items }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className='relative inline-block text-left'
			onClick={() => setIsOpen((prev) => !prev)}
		>
			<div className='flex items-center cursor-pointer'>
				<span className='mr-1'>{label}</span>
				{isOpen ? (
					<AiOutlineUp />
				) : (
					<AiOutlineDown className='w-4 h-4' />
				)}
			</div>

			{isOpen && (
				<div className='absolute left-0 z-10 w-48 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition duration-150 ease-in-out'>
					<div className='absolute left-5 -top-2 w-4 h-4 bg-white transform rotate-45' />

					<div className='py-1'>
						{items.map((item) => (
							<Link
								href={item.href}
								key={item.label}
								className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
