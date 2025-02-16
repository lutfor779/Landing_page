"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";

const menues = ["Home", "About", "Contact"];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	// Handle scrolling effect for header background
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 150 && !isScrolled) setIsScrolled(true);
			else if (window.scrollY <= 150 && isScrolled) setIsScrolled(false);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isScrolled]);

	return (
		<header
			className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50 ${
				isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"
			}`}
		>
			<Container className="flex justify-between items-center py-4">
				{/* Left: Logo */}
				<Link href="/" className="text-xl font-bold ">
					Logo
				</Link>

				{/* Right: Navigation for larger screens */}
				<nav className="hidden md:flex space-x-6">
					{menues.map((item) => (
						<Link
							key={item}
							href={`#${item.toLowerCase()}`}
							className="hover:opacity-85 font-bold"
						>
							{item}
						</Link>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-2xl"
					onClick={() => setMenuOpen((prev) => !prev)}
					aria-label="Toggle Menu"
				>
					{menuOpen ? "opn" : "cls"}
				</button>
			</Container>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-white text-black shadow-md py-4">
					<nav className="flex flex-col items-center space-y-4">
						{menues.map((item) => (
							<Link
								key={item}
								href={`#${item.toLowerCase()}`}
								className="hover:opacity-85 font-bold"
								onClick={() => setMenuOpen(false)}
							>
								{item}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
