import {
	faGithub,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center fixed bottom-0 border w-screen py-3 bg-white">
			<div className="flex justify-between items-center mobile-sm:w-3/5 computer:w-3/5">
				<a href="https://twitter.com/isree1998">
					<FontAwesomeIcon icon={faTwitter} className="w-5 text-xl" />
				</a>
				<a href="https://www.linkedin.com/in/ikkurthis1998/">
					<FontAwesomeIcon icon={faLinkedinIn} className="w-5 text-xl" />
				</a>
				<a href="https://github.com/ikkurthis1998">
					<FontAwesomeIcon icon={faGithub} className="w-5 text-xl" />
				</a>
				<a href="https://whoissree.com" className="w-5 text-xl">
					🧑‍💻
				</a>
			</div>
			<span className="mt-1">Made with 💖 by Sree</span>
		</footer>
	);
}
