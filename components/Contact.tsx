"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks, contactInfo } from '@/data';

const Contact = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isCopied, setIsCopied] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	const email = contactInfo.email;

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy email:', err);
			// Fallback for older browsers
			const textArea = document.createElement('textarea');
			textArea.value = email;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		}
	};

	// Icon mapping for dynamic icon rendering
	const iconMap = {
		Github,
		Linkedin,
		Twitter,
	};

	return (
		<section ref={sectionRef} id="contact" className="section-padding bg-secondary/20">
			<div className="container-width">
				<div
					className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
				>
					<h2 className="heading text-center mb-16">Get In Touch</h2>

					<div className="max-w-4xl mx-auto">
						{/* Contact Info */}
						<div className="text-center mb-12">
							<h3 className="text-2xl font-semibold mb-6">Let&apos;s work together</h3>
							<p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
								I&apos;m always interested in new opportunities and exciting projects.
								Whether you have a question or just want to say hi, I&apos;ll try my best
								to get back to you!
							</p>
						</div>

						{/* Contact Actions */}
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
							<a
								href={`mailto:${email}`}
								className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							>
								<Mail className="h-5 w-5" />
								<span>Email Me</span>
							</a>

							<button
								onClick={handleCopyEmail}
								className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isCopied
									? 'bg-green-500 text-white'
									: 'glass-effect hover:bg-accent'
									}`}
							>
								{isCopied ? (
									<>
										<Check className="h-5 w-5" />
										<span>Copied!</span>
									</>
								) : (
									<>
										<Copy className="h-5 w-5" />
										<span>Copy Email</span>
									</>
								)}
							</button>
						</div>

						{/* Social Media Links */}
						<div className="flex items-center justify-center space-x-6">
							{socialLinks.map((social, index) => {
								const IconComponent = iconMap[social.icon as keyof typeof iconMap];
								return (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className={`p-4 rounded-full glass-effect hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
											}`}
										style={{ transitionDelay: `${index * 200}ms` }}
										aria-label={`Visit my ${social.label} profile`}
									>
										<IconComponent className="h-6 w-6" />
									</a>
								);
							})}
						</div>
					</div>


				</div>
			</div>
		</section>
	);
};

export default Contact;