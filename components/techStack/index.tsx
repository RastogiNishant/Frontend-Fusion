"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactIcon from "@/app/assets/icons/react.svg";
import Next from "@/app/assets/icons/next.svg";
import Node from "@/app/assets/icons/node.svg";
import Express from "@/app/assets/icons/express.svg";
import GraphQL from "@/app/assets/icons/graphql.svg";
import Python from "@/app/assets/icons/python.svg";
import MongoDB from "@/app/assets/icons/mongodb.svg";
import PostgreSQL from "@/app/assets/icons/postgresql.svg";
import MySQL from "@/app/assets/icons/mysql.svg";
import MariaDB from "@/app/assets/icons/mariadb.svg";
import Tailwind from "@/app/assets/icons/tailwind.svg";
import MaterialUI from "@/app/assets/icons/materialui.svg";
import Vue from "@/app/assets/icons/vue.svg";
import Angular from "@/app/assets/icons/angular.svg";
import "@/components/techStack/index.css";

const technologies = [
	{ name: "ReactJS", image: ReactIcon },
	{ name: "NextJS", image: Next },
	{ name: "VueJS", image: Vue },
	{ name: "AngularJS", image: Angular },
	{ name: "NodeJS", image: Node },
	{ name: "ExpressJS", image: Express },
	{ name: "GraphQL", image: GraphQL },
	{ name: "Python", image: Python },
	{ name: "MongoDB", image: MongoDB },
	{ name: "MySQL", image: MySQL },
	{ name: "PostgreSQL", image: PostgreSQL },
	{ name: "MariaDB", image: MariaDB },
	{ name: "Tailwind CSS", image: Tailwind },
	{ name: "Material UI", image: MaterialUI },
];

const TechStack = () => {
	const [visibleItems, setVisibleItems] = useState(
		new Array(technologies.length).fill(false),
	);
	const techRefs = useRef<(HTMLDivElement | null)[]>(
		new Array(technologies.length).fill(null),
	);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = Number(
						entry.target.getAttribute("data-index"),
					);
					setVisibleItems((prev) => {
						const newVisibleItems = [...prev];
						newVisibleItems[index] = true;
						return newVisibleItems;
					});
					observer.unobserve(entry.target);
				}
			});
		});

		const refs = techRefs.current;

		refs.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			refs.forEach((ref) => {
				if (ref) observer.unobserve(ref);
			});
		};
	}, []);

	return (
		<section className='py-10'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center mb-8  text-black '>
					Tech Stack
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
					{technologies.map((tech, index) => (
						<div
							key={tech.name}
							data-index={index}
							ref={(el) => {
								techRefs.current[index] = el;
							}}
							className={`flex flex-col items-center p-4 bg-gray-900 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ${
								visibleItems[index]
									? `animate-${index % 4}`
									: ""
							}`}
							style={{
								animationDelay: `${index * 0.1}s`,
								opacity: visibleItems[index] ? 1 : 0,
							}}
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
