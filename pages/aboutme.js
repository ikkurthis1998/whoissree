import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutMe() {
	return (
		<>
			<Navbar iniState="flex justify-center items-center h-20 w-screen items-center p-10 fixed top-0 border-2 shadow-lg bg-white" />

			<div className="flex flex-col justify-start items-center w-screen mt-32 mb-24">
				<h1 className="text-5xl mb-10">About Me</h1>
				<div className="mobile-sm:w-4/5 computer:w-3/5 p-5">
					<h1 className="text-3xl mb-2">Profession</h1>
					<p className="text-xl">
						Started by web development journey in March of 2021, after realizing
						my love for programming and computers.
					</p>
				</div>
				<div className="mobile-sm:w-4/5 computer:w-3/5 p-5">
					<h1 className="text-3xl mb-2">Education</h1>
					<p className="text-xl">
						Did B.Tech, Aerospace Engineering from Amrita Vishwa Vidyapeetham,
						Coimbatore. <br />
						Learnt Web Development from Internet 🌎.
					</p>
				</div>
				<div className="mobile-sm:w-4/5 computer:w-3/5 p-5">
					<h1 className="text-3xl mb-2">Hobbies</h1>
					<p className="text-xl">
						I like reading books about philosophy, leadership and spirituality.
						<br /> I love cooking 👨‍🍳 and love even more eating 🤤.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
