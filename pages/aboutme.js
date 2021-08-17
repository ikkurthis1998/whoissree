import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutMe() {
	return (
		<>
			<Navbar iniState="flex justify-center items-center h-20 w-screen items-center p-10 fixed top-0 border-2 shadow-lg bg-white" />

			<div className="flex flex-col justify-start items-center w-screen mt-32 mb-24">
				<h1 className="text-5xl mb-10 font-medium">About Me</h1>
				<div className="mobile-sm:w-11/12 computer:w-3/5 p-5">
					<h1 className="text-3xl mb-2 font-medium">Profession</h1>
					<p className="text-xl">
						Started by web development journey in March of 2021, after realizing
						my love for programming and computers.
					</p>
				</div>
				<div className="mobile-sm:w-11/12 computer:w-3/5 p-5">
					<h1 className="text-3xl mb-2 font-medium">Education</h1>
					<p className="text-xl">
						Did B.Tech, Aerospace Engineering from Amrita Vishwa Vidyapeetham,
						Coimbatore. <br />
						Learnt Web Development from Internet 🌎.
					</p>
				</div>

				<div className="mobile-sm:w-11/12 computer:w-3/5 p-5">
					<h1 className="text-3xl mb-2 font-medium">Hobbies</h1>
					<p className="text-xl">
						I like reading books about philosophy, leadership and spirituality.
						<br /> I love cooking 👨‍🍳 and love even more eating 🤤.
					</p>
				</div>
				<div className="flex flex-col p-5 mobile-sm:w-11/12 computer:w-3/5">
					<h1 className="text-3xl mb-2 font-medium">Skills</h1>
					<div className="mobile-sm:text-base mobile-md:text-lg tablet:text-xl flex flex-wrap">
						<p className="rounded-lg mobile-sm:m-1 mobile-md:m-2 bg-blue-500 text-white mobile-sm:px-2 mobile-md:px-4 mobile-lg:px-5 border-2 mobile-sm:w-28 mobile-md:w-32 tablet:w-36 text-center h-10 flex justify-center items-center">
							React JS
						</p>
						<p className="rounded-lg mobile-sm:m-1 mobile-md:m-2 bg-blue-500 text-white mobile-sm:px-2 mobile-md:px-4 mobile-lg:px-5 border-2 mobile-sm:w-28 mobile-md:w-32 tablet:w-36 text-center h-10 flex justify-center items-center">
							Express JS
						</p>
						<p className="rounded-lg mobile-sm:m-1 mobile-md:m-2 bg-blue-500 text-white mobile-sm:px-2 mobile-md:px-4 mobile-lg:px-5 border-2 mobile-sm:w-28 mobile-md:w-32 tablet:w-36 text-center h-10 flex justify-center items-center">
							Tailwind
						</p>
						<p className="rounded-lg mobile-sm:m-1 mobile-md:m-2 bg-blue-500 text-white mobile-sm:px-2 mobile-md:px-4 mobile-lg:px-5 border-2 mobile-sm:w-28 mobile-md:w-32 tablet:w-36 text-center h-10 flex justify-center items-center">
							Next JS
						</p>
						<p className="rounded-lg mobile-sm:m-1 mobile-md:m-2 bg-blue-500 text-white mobile-sm:px-2 mobile-md:px-4 mobile-lg:px-5 border-2 mobile-sm:w-28 mobile-md:w-32 tablet:w-36 text-center h-10 flex justify-center items-center">
							JavaScript
						</p>
						<p className="rounded-lg mobile-sm:m-1 mobile-md:m-2 bg-blue-500 text-white mobile-sm:px-2 mobile-md:px-4 mobile-lg:px-5 border-2 mobile-sm:w-28 mobile-md:w-32 tablet:w-36 text-center h-10 flex justify-center items-center">
							CSS
						</p>
						<p className="rounded-lg mobile-sm:m-1 mobile-md:m-2 bg-blue-500 text-white mobile-sm:px-2 mobile-md:px-4 mobile-lg:px-5 border-2 mobile-sm:w-28 mobile-md:w-32 tablet:w-36 text-center h-10 flex justify-center items-center">
							HTML
						</p>
						<p className="rounded-lg mobile-sm:m-1 mobile-md:m-2 bg-blue-500 text-white mobile-sm:px-2 mobile-md:px-4 mobile-lg:px-5 border-2 mobile-sm:w-28 mobile-md:w-32 tablet:w-36 text-center h-10 flex justify-center items-center">
							Firebase
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
