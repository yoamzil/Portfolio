"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Mail, Github, Linkedin } from "lucide-react";
import { socialLinks, contactInfo } from '@/data';

const FloatingContactButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Show the button after scrolling down 200px
			setIsVisible(window.scrollY > 200);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!isVisible) return null;

	const iconMap = {
		Github,
		Linkedin,
	};

	return (
		<div className="fixed bottom-6 right-6 z-40">
			{/* Quick Links Menu */}
			{isOpen && (
				<div className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2">
					<a
						href={`mailto:${contactInfo.email}`}
						className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glass-effect"
					>
						<Mail className="h-5 w-5 text-primary" />
						<span className="text-sm font-medium whitespace-nowrap">Email Me</span>
					</a>

					{socialLinks.slice(0, 2).map((social) => {
						const IconComponent = iconMap[social.icon as keyof typeof iconMap];
						return (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glass-effect"
							>
								<IconComponent className="h-5 w-5 text-primary" />
								<span className="text-sm font-medium whitespace-nowrap">{social.label}</span>
							</a>
						);
					})}
				</div>
			)}

			{/* Main Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${isOpen ? "rotate-45" : "hover:scale-110"
					}`}
				aria-label="Contact options"
			>
				{isOpen ? (
					<X className="h-6 w-6" />
				) : (
					<MessageCircle className="h-6 w-6" />
				)}
			</button>
		</div>
	);
};

export default FloatingContactButton;