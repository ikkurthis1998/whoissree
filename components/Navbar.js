import { useEffect, useState } from "react";
import NavbarToggle from "./NavbarToggle";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpider } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ iniState }) => {
	const [navClassName, setNavClassName] = useState(
		"flex justify-center items-center h-20 w-screen items-center p-10 fixed top-0 border-2 shadow-lg bg-white"
	);
	const [navOpen, setNavOpen] = useState(false);

	const toggleNav = () => {
		navOpen ? setNavOpen(false) : setNavOpen(true);
	};

	useEffect(() => {
		let lastScroll = 0;
		const navFunction = () => {
			const currentScroll = window.pageYOffset;

			if (lastScroll - currentScroll > 0) {
				setNavClassName(
					"flex justify-center items-center h-20 w-screen items-center p-10 fixed top-0 border-2 shadow-lg bg-white"
				);
			} else {
				setNavClassName("hidden");
			}

			lastScroll = currentScroll;
		};
		window.addEventListener("scroll", navFunction);

		return () => window.removeEventListener("scroll", navFunction);
	}, []);

	return (
		<>
			<div className={navClassName}>
				<div className="flex mobile-sm:w-screen tablet:w-4/5 computer:w-3/5 justify-between items-center">
					<div className="text-4xl w-1/2">
						<Link href="/" passHref>
							<b className="cursor-pointer">
								<FontAwesomeIcon icon={faSpider} className="w-12" />
							</b>
						</Link>
					</div>

					<div className="tablet:hidden w-1/2 flex justify-end">
						<NavbarToggle toggleNav={toggleNav} navOpen={navOpen} />
					</div>
					<div className="ml-10 w-1/2 text-xl flex mobile-sm:flex-col tablet:flex-row justify-between mobile-sm:hidden tablet:flex w-1/2">
						<div>
							<Link href="/aboutme">
								<a className="cursor-pointer">About Me</a>
							</Link>
						</div>
						<div>
							<Link href="/projects">
								<a className="cursor-pointer">Projects</a>
							</Link>
						</div>

						<div>
							<Link href="/blog">
								<a className="cursor-pointer">Blog</a>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`text-xl flex flex-col items-center bg-white bg-opacity-90 tablet:hidden mt-20 fixed top-0 left-full w-screen border-2 transform ${
					navOpen ? "-translate-x-full" : "translate-x-full"
				} duration-500 h-full`}
			>
				<div className="cursor-pointer mb-20 mt-20 hover:bg-blue-100 w-32 px-3 py-2 rounded-lg border-2 bg-white bg-opacity-100 text-center">
					<Link href="/aboutme">
						<a className="cursor-pointer">About Me</a>
					</Link>
				</div>
				<div className="cursor-pointer mb-20 hover:bg-blue-100 w-32 px-3 py-2 rounded-lg border-2 bg-white bg-opacity-100 text-center">
					<Link href="/projects">
						<a className="cursor-pointer">Projects</a>
					</Link>
				</div>
				<div className="cursor-pointer mb-20 hover:bg-blue-100 w-32 px-3 py-2 rounded-lg border-2 bg-white bg-opacity-100 text-center">
					<Link href="/blog">
						<a className="cursor-pointer">Blog</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
