const NavbarToggle = ({ navOpen, toggleNav }) => {
	return (
		<div
			className="w-10 h-10 flex flex-col justify-around cursor-pointer tablet:hidden"
			onClick={() => toggleNav()}
		>
			<div
				className={
					navOpen
						? "h-1 w-4 rounded-full bg-black transform rotate-45 origin-right translate-y-3.5 duration-200"
						: "h-1.5 w-5 rounded-full bg-black transform duration-200"
				}
			></div>
			<div
				className={
					navOpen
						? "h-1 w-8 rounded-full bg-black transform -rotate-45 duration-200"
						: "h-1.5 w-10 rounded-full bg-black transform duration-200"
				}
			></div>
			<div
				className={
					navOpen
						? "h-1 w-4 rounded-full bg-black self-end transform rotate-45 origin-left -translate-y-3.5 duration-200 -translate-x-2"
						: "h-1.5 w-5 rounded-full bg-black self-end transform duration-200"
				}
			></div>
		</div>
	);
};

export default NavbarToggle;
