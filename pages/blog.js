import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blog() {
	const blogs = [
		{
			title: "No more Access-Control-Allow-Origin error",
			description:
				"Problem No 'Access-Control-Allow-Origin' header is present on the requested resource This is the error that bugged me the most in the early stages of my web development journey.😪 To know more about this error and about CORS: https://developer.moz...",
			live: "https://blog.whoissree.com/no-more-access-control-allow-origin-error",
		},
		{
			title: "Creating objects with functions, one level deeper.",
			description:
				"Basic functionality of function is like a computer. We input some properties, a function does what is defined inside it and gives an output. In JavaScript a majority of functions are used to create objects. It is because an object can store both Data...",
			live: "https://blog.whoissree.com/creating-objects-with-functions-one-level-deeper",
		},
	];

	return (
		<>
			<Navbar iniState="flex justify-center items-center h-20 w-screen items-center p-10 fixed top-0 border-2 shadow-lg bg-white" />

			<div className="flex flex-col justify-start items-center w-screen mt-32 mb-24">
				<h1 className="text-5xl mb-10">Blog</h1>
				{blogs.map((blog) => {
					return (
						<div
							key={blog.title}
							className="flex border py-8 rounded-lg flex-col justify-evenly mobile-sm:w-4/5 tablet:w-4/5 computer:w-3/5 px-5 mb-10"
						>
							<h1 className="text-3xl mb-2">{blog.title}</h1>
							<p className="text-xl">{blog.description}</p>
							<div className="flex justify-evenly mt-5">
								<Link href={blog.live}>
									<a className="border w-28 text-center rounded bg-purple-300 h-10 flex flex-col justify-center">
										Read more
									</a>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
			<Footer />
		</>
	);
}
