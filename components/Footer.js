import {
	faGithub,
	faLinkedinIn,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSpider } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<footer className="flex justify-center items-center border w-screen py-3 bg-white flex-wrap">
			<div className="flex justify-between items-center mobile-sm:w-3/5 tablet:w-1/4">
				<a href="https://twitter.com/isree1998">
					<FontAwesomeIcon icon={faTwitter} className="text-xl" />
				</a>
				<a href="https://www.linkedin.com/in/ikkurthis1998/">
					<FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
				</a>
				<a href="https://github.com/ikkurthis1998">
					<FontAwesomeIcon icon={faGithub} className="text-xl" />
				</a>
				<a href="https://whoissree.com" className="text-lg">
					🕷️
				</a>
			</div>
			<span className="mt-1 mobile-sm:w-screen tablet:w-1/2 mobile-sm:text-center tablet:text-right">
				© 2021 Sree
			</span>
		</footer>
	);
}
