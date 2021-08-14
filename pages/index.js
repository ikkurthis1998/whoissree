import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container w-screen flex-grow">
				<Navbar iniState="hidden" />
				<section className="w-screen h-screen flex flex-col justify-center items-center text-center border-2">
					<h1 className="text-5xl mb-2">
						Hi👋,
						<br /> I am Sree
					</h1>

					<p className="text-xl mb-20">Full Stack Web Developer</p>
					<div className="flex justify-evenly mobile-sm:w-screen tablet:w-96 computer:w-3/5">
						<span className="cursor-pointer transition-all hover:bg-blue-100 border-2 w-28 h-10 flex justify-center items-center rounded-lg">
							About Me
						</span>
						<span className="cursor-pointer transition-all hover:bg-blue-100 border-2 w-28 h-10 flex justify-center items-center rounded-lg">
							<Link href="/projects">
								<a>Projects</a>
							</Link>
						</span>
						<span className="cursor-pointer transition-all hover:bg-blue-100 border-2 w-28 h-10 flex justify-center items-center rounded-lg">
							<a href="https://blog.whoissree.com/">Blog</a>
						</span>
					</div>
				</section>

				<section className="w-screen h-screen flex flex-col justify-center items-center p-5">
					<span className="text-6xl mb-2">🧑‍💻</span>
					<h1 className="text-5xl mb-2">About Me:</h1>
					<br />
					<p className="text-2xl line leading-loose tracking-wide text-center  mobile-sm:w-screen tablet:w-96 computer:w-3/5 px-2">
						<b>I am Sreemannarayana Ikkurthi🙏</b>
						<br /> 🚀Aerospace Engineer to Web Developer. <br />
						🖥️Love creating web appications.
						<br />
						⚡Currently helping{" "}
						<a
							href="https://www.revos.in/"
							target="_blank"
							rel="noreferrer"
							className="cursor-pointer hover:underline text-blue-700"
						>
							Revos
						</a>{" "}
						build India&apos;s largest growing
						<br /> electric vehicle charging network.
					</p>
				</section>
			</main>

			<footer className="flex justify-center mb-5">
				<span className="text-xl">Made with 💖 by Sree</span>
			</footer>
		</div>
	);
}
