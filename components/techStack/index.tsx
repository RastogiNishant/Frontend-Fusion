import Image from "next/image";
import React from "@/app/assets/icons/react.svg";
import Next from "@/app/assets/icons/next.svg";
import Node from "@/app/assets/icons/node.svg";
import GraphQL from "@/app/assets/icons/graphql.svg";
import Tailwind from "@/app/assets/icons/tailwind.svg";
import MaterialUI from "@/app/assets/icons/materialui.svg";
// import Sanity from "@/app/assets/icons/sanity.png";
// import Prismic from "@/app/assets/icons/prismic.png";
// import Three from "@/app/assets/icons/threejs.png";
import Vue from "@/app/assets/icons/vue.svg";
import Angular from "@/app/assets/icons/angular.svg";
const technologies = [
	{ name: "ReactJS", image: React },
	{ name: "NextJS", image: Next },
	{ name: "VueJS", image: Vue },
	{ name: "AngularJS", image: Angular },
	{ name: "NodeJS", image: Node },
	{ name: "GraphQL", image: GraphQL },
	{ name: "Tailwind CSS", image: Tailwind },
	{ name: "Material UI", image: MaterialUI },
	// { name: "Sanity", image: Sanity },
	// { name: "Prismic", image: Prismic },
	// { name: "Three.js", image: Three },
];

const TechStack = () => {
	return (
		<section className='bg-gray-50 py-10'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-8'>
					Tech Stack
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
					{technologies.map((tech) => (
						<div
							key={tech.name}
							className='flex flex-col items-center p-4 bg-black shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300'
						>
							<Image
								src={tech.image}
								alt={tech.name}
								width={100}
								height={100}
								className='h-16 w-16 object-contain mb-4'
							/>
							<p className='text-sm font-medium text-white'>
								{tech.name}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
