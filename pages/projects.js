import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Projects() {
	const projects = [
		{
			title: "Profit or Loss",
			description: "Find out if you got profit or loss in stocks.",
			live: "https://profit-or-loss.web.app/",
			source: "https://github.com/ikkurthis1998/profit-or-loss",
		},
		{
			title: "Birthday Palindrome",
			description: "Check if your birthday is palindrome",
			live: "https://birthday-palindrome.web.app/",
			source: "https://github.com/ikkurthis1998/birthday-palindrome",
		},
		{
			title: "Fun with Triangles",
			description: "Bunch of fun stuff regarding triangles",
			live: "https://fun-with-triangles.web.app/",
			source: "https://github.com/ikkurthis1998/fun-with-triangles",
		},
		{
			title: "Is your Birthday lucky?",
			description: "Check if your birthday is lucky",
			live: "https://luck-checker.web.app/",
			source: "https://github.com/ikkurthis1998/luck-checker",
		},
		{
			title: "Cash Register Manager",
			description: "Don't have to calculate change ever again",
			live: "https://cash-register-manager.web.app/",
			source: "https://github.com/ikkurthis1998/cash-register",
		},
		{
			title: "My Favs App",
			description:
				"Collection of my favourite books, movies and tv series. Everyone have thier favourites.",
			live: "https://my-favs.netlify.app/",
			source: "https://github.com/ikkurthis1998/my-favs",
		},
		{
			title: "Food-emoji App",
			description:
				"Know the meaning of food emojis by either typing in or selecting from the list below.",
			live: "https://food-emoji-app.netlify.app/",
			source: "https://github.com/ikkurthis1998/food-drink-emoji-meaning",
		},
		{
			title: "Iam Groot App",
			description:
				'Translates English to Groot Language. Try saying "I am Groot"',
			live: "https://ikkurthis1998.github.io/iamgroot/",
			source: "https://github.com/ikkurthis1998/iamgroot",
		},
		{
			title: "Banana App",
			description:
				'Translates English to Minion Language. Try saying "I am hungry"',
			live: "https://ikkurthis1998.github.io/banana/",
			source: "https://github.com/ikkurthis1998/banana",
		},
		{
			title: "Iron Man Quiz",
			description: "A CLI quiz app to know how well you know Iron Man.",
			live: "https://replit.com/@ikkurthis1998/Iron-Man-Quiz?embed=true#index.js",
			source: "https://github.com/ikkurthis1998/IronManQuiz",
		},
		{
			title: "Know me?",
			description: "A CLI quiz app to know how well you know me.",
			live: "https://replit.com/@ikkurthis1998/knowme?embed=true#index.js",
			source: "https://github.com/ikkurthis1998/knowme-",
		},
	];

	return (
		<div className="flex flex-col justify-start items-center w-screen">
			<Navbar iniState="flex justify-center items-center h-20 w-screen items-center p-10 fixed top-0 border-2 shadow-lg bg-white" />
			<h1 className="text-5xl mt-32 mb-10">Projects</h1>
			{projects.map((project) => {
				return (
					<div
						key={project.title}
						className="flex border py-8 rounded-lg flex-col justify-evenly mobile-sm:w-4/5 tablet:w-4/5 computer:w-3/5 px-5 mb-10"
					>
						<h1 className="text-3xl mb-2">{project.title}</h1>
						<p className="text-xl">{project.description}</p>
						<div className="flex justify-evenly mt-5">
							<Link href={project.live}>
								<a className="border w-20 text-center rounded bg-green-300 h-10 flex flex-col justify-center">
									Live
								</a>
							</Link>
							<Link href={project.source}>
								<a className="border w-28 text-center rounded bg-blue-300 h-10 flex flex-col justify-center">
									Source Code
								</a>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}
