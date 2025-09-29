"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems } from '@/data';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Update active section based on scroll position
			const sections = ['about', 'experience', 'projects', 'contact'];
			const scrollPosition = window.scrollY + 200; // Increased offset for better detection

			// Check if we're near the bottom of the page (for contact section)
			const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

			if (isNearBottom) {
				setActiveSection('contact');
				return;
			}

			let currentSection = "";

			// Find the section that's currently in view
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;

					if (scrollPosition >= offsetTop) {
						currentSection = section;
						break;
					}
				}
			}

			// Set to empty if at top of page
			if (window.scrollY < 200) {
				setActiveSection("");
			} else {
				setActiveSection(currentSection);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Call once to set initial state

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Transform navItems to match the component's expected format (exclude Home)
	const transformedNavItems = navItems
		.filter(item => item.name !== "Home")
		.map(item => ({
			name: item.name,
			href: item.link
		}));

	// Smooth scroll function
	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		const targetId = href.replace('#', '');
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			});
		}

		// Close mobile menu if open
		setIsMobileMenuOpen(false);
	};

	if (!mounted) return null;

	return (
		<header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
				? "glass-effect shadow-lg"
				: "bg-transparent"
				}`}
		>
			<nav className="container-width">
				<div className="flex items-center justify-between h-16">
					<a href="#" className="text-xl font-bold">
						Youness Amzil 👨‍💻
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{transformedNavItems.map((item) => {
							const sectionId = item.href.replace('#', '');
							const isActive = activeSection === sectionId;

							return (
								<a
									key={item.name}
									href={item.href}
									onClick={(e) => handleSmoothScroll(e, item.href)}
									className={`text-sm font-medium transition-all duration-300 relative ${isActive
										? "text-primary font-semibold"
										: "hover:text-primary"
										}`}
								>
									{item.name}
									{isActive && (
										<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
									)}
								</a>
							);
						})}
						<button
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="p-2 rounded-lg hover:bg-accent transition-colors"
							aria-label="Toggle theme"
						>
							{theme === "dark" ? (
								<Sun className="h-4 w-4" />
							) : (
								<Moon className="h-4 w-4" />
							)}
						</button>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center space-x-2">
						<button
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="p-2 rounded-lg hover:bg-accent transition-colors"
							aria-label="Toggle theme"
						>
							{theme === "dark" ? (
								<Sun className="h-4 w-4" />
							) : (
								<Moon className="h-4 w-4" />
							)}
						</button>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="p-2 rounded-lg hover:bg-accent transition-colors"
							aria-label="Toggle menu"
						>
							{isMobileMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden py-4 border-t border-border">
						<div className="flex flex-col space-y-3">
							{transformedNavItems.map((item) => {
								const sectionId = item.href.replace('#', '');
								const isActive = activeSection === sectionId;

								return (
									<a
										key={item.name}
										href={item.href}
										onClick={(e) => handleSmoothScroll(e, item.href)}
										className={`text-sm font-medium transition-colors py-2 px-3 rounded-lg ${isActive
											? "text-primary bg-primary/10 font-semibold"
											: "hover:text-primary hover:bg-accent/50"
											}`}
									>
										{item.name}
									</a>
								);
							})}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;