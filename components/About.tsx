"use client";

import { useEffect, useRef, useState } from "react";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

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

	const skills = [
		"React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Python",
		"TailwindCSS", "PostgreSQL", "MongoDB", "Docker", "Git", "AWS"
	];

	const features = [
		{
			icon: Code,
			title: "Clean Code",
			description: "Writing maintainable, scalable, and efficient code following best practices."
		},
		{
			icon: Zap,
			title: "Performance",
			description: "Optimizing applications for speed, accessibility, and user experience."
		},
		{
			icon: Palette,
			title: "Design",
			description: "Creating beautiful, intuitive interfaces that users love to interact with."
		}
	];

	return (
		<section ref={sectionRef} id="about" className="section-padding">
			<div className="container-width">
				<div
					className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
				>
					<h2 className="heading text-center mb-16">About Me</h2>

					<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
						<div>
							<p className="text-lg text-muted-foreground mb-6 leading-relaxed">
								I&apos;m a passionate Full Stack Developer based in Morocco, with a strong foundation
								from 1337 Coding School and ALX Software Engineering Program. I specialize in
								building modern web applications that are fast, accessible, and user-friendly.
							</p>
							<p className="text-lg text-muted-foreground mb-8 leading-relaxed">
								My journey in tech started in 2022, and since then I&apos;ve been dedicated to
								continuous learning and creating solutions that make a difference.
							</p>
							<a
								href="/Amzil-Youness-Resume.pdf"
								download
								className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
							>
								Download Resume
							</a>
						</div>

						<div className="space-y-6">
							<h3 className="text-xl font-semibold mb-4">Technologies I work with</h3>
							<div className="flex flex-wrap gap-3">
								{skills.map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<div
								key={feature.title}
								className={`text-center p-6 rounded-lg glass-effect transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
									}`}
								style={{ transitionDelay: `${index * 200}ms` }}
							>
								<feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
								<h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
								<p className="text-muted-foreground">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;