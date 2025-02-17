"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";

const menues = ["Home", "About", "Contact"];

const Header = () => {
	const [prevScrollY, setPrevScrollY] = useState(0);
	const [hidden, setHidden] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [hasBackground, setHasBackground] = useState(false);
	const menuRef = useRef(null);
	const menuButtonRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;

			// Hide header when scrolling down
			if (currentScroll > prevScrollY && currentScroll > 50) {
				setHidden(true);
			} else {
				setHidden(false);
			}

			// Add background after scrolling 250px
			if (currentScroll > 250) {
				setHasBackground(true);
			} else {
				setHasBackground(false);
			}

			// Close mobile menu when scrolling
			if (menuOpen) {
				setMenuOpen(false);
			}

			setPrevScrollY(currentScroll);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollY, menuOpen]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				menuOpen &&
				menuRef.current &&
				!menuRef.current.contains(event.target) &&
				event.target !== menuButtonRef.current
			) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [menuOpen]);

	return (
		<header
			className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out z-50 transform ${
				hidden ? "-translate-y-full" : "translate-y-0"
			} ${
				hasBackground
					? "bg-white/65 backdrop-blur-md md:shadow-md shadow-none"
					: "bg-transparent text-white"
			}`}
		>
			<Container className="flex justify-between items-center py-4">
				{/* Left: Logo */}
				<Link href="/" className="text-xl font-bold">
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
					ref={menuButtonRef}
				>
					{menuOpen ? "×" : "☰"}
				</button>
			</Container>

			{/* Mobile Menu */}
			{menuOpen && (
				<div
					ref={menuRef}
					className="md:hidden absolute top-full left-0 w-full text-black bg-white/65 backdrop-blur-lg shadow-md py-4"
				>
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
