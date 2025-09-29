"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { heroContent, socialLinks } from '@/data';

const Hero = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Smooth scroll function
	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const targetElement = document.getElementById('about');

		if (targetElement) {
			const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			});
		}
	};

	// Icon mapping for dynamic icon rendering
	const iconMap = {
		Github,
		Linkedin,
		Twitter,
	};

	return (
		<section className="min-h-screen flex items-center justify-center relative">
			<div className="container-width text-center">
				<div
					className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
				>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
						{heroContent.greeting}{" "}
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							{heroContent.name}
						</span>
					</h1>
					<h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
						{heroContent.title}
					</h2>
					<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						{heroContent.subtitle}
					</p>

					<div className="flex items-center justify-center space-x-6 mb-12">
						{socialLinks.map((social) => {
							const IconComponent = iconMap[social.icon as keyof typeof iconMap];
							return (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 rounded-full glass-effect hover:scale-110 transition-all duration-300"
									aria-label={social.label}
								>
									<IconComponent className="h-5 w-5" />
								</a>
							);
						})}
					</div>

					<a
						href="#about"
						onClick={handleSmoothScroll}
						className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
					>
						<span>{heroContent.ctaText}</span>
						<ArrowDown className="h-4 w-4" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;