import Image from "next/image";
import Profile from "@/app/assets/images/Me.jpg";
import TechStack from "@/components/techStack";
const HomePage = () => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='container mx-auto flex flex-col lg:flex-row items-center p-8'>
				<div className='text-left lg:w-1/2 mb-8 lg:mb-0'>
					<h1 className='text-4xl font-bold text-gray-900'>
						Nishant R.
					</h1>
					<p className='text-xl text-gray-700 mt-4'>
						I am a individual freelance software developer
						specializing in modern fullstack technologies like
						React(Expert), Next.js, VueJS, AngularJS and NodeJS,
						ExpressJS, Redux, MobEx, ReactNative, Tailwind CSS, MUI,
						RTL, RTK etc.
					</p>
					<p className='text-lg text-gray-500 mt-2'>
						With expertise in building scalable web applications,
						backend development, mobile development, and performance
						optimization, I bring your ideas to life.
					</p>
				</div>

				<div className='lg:w-1/2 flex justify-center animate-fadeIn'>
					<Image
						src={Profile}
						alt='Nishant R.'
						width={600}
						className='rounded-3xl shadow-lg'
					/>
				</div>

				<TechStack />
			</div>
		</div>
	);
};

export default HomePage;
