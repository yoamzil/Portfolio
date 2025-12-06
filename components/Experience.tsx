"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
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

	const experiences = [
		{
			title: "Junior Full Stack Developer",
			company: "Chaabi Cash",
			location: "Morocco",
			period: "Jun 2025 - Nov 2025",
			description: "Developed a platform using Next.js, TypeScript, and Tailwind CSS with multi-language support.",
			achievements: [
				"Built DataFlow, a full stack client management app to digitize daily operations",
				"Automated caisse & plafond tracking, reducing manual calculations by 70%",
				"Introduced secure authentication with session tokens for offline usage",
				"Improved data visibility with interactive filtering and sorting features"
			],
			technologies: ["React", "Next.js", "TypeScript", "Node.js", "SQLite"]
		},
		{
			title: "Software Engineering Student",
			company: "ALX Africa",
			location: "Remote",
			period: "2023 - 2024",
			description: "Intensive full-stack development program with industry mentorship",
			achievements: [
				"Completed comprehensive curriculum in algorithms and data structures",
				"Participated in collaborative coding projects and code reviews"
			],
			technologies: ["Python", "C", "JavaScript", "SQL", "DevOps", "System Design"]
		},
		{
			title: "Software Engineering Student",
			company: "1337 Coding School",
			location: "Morocco",
			period: "2022 - Present",
			description: "Completed the core curriculum in software engineering and systems programming",
			achievements: [
				"Mastered low-level programming with C/C++ and Unix systems",
				"Completed complex algorithmic challenges and optimization problems",
				"Developed system administration and networking skills"
			],
			technologies: ["C", "C++", "Unix", "Git", "Algorithms", "System Admin"]
		}
	];

	return (
		<section ref={sectionRef} id="experience" className="section-padding bg-secondary/20">
			<div className="container-width">
				<div
					className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
				>
					<h2 className="heading text-center mb-6">Professional Journey</h2>
					<p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
						A timeline of my professional growth and achievements
					</p>

					<div className="max-w-4xl mx-auto">
						<div className="relative">
							{/* Timeline line */}
							<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

							{experiences.map((exp, index) => (
								<div
									key={index}
									className={`relative flex items-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
										}`}
									style={{ transitionDelay: `${index * 200}ms` }}
								>
									{/* Timeline dot */}
									<div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1.5 z-10"></div>

									{/* Content */}
									<div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
										<div className="glass-effect p-6 rounded-lg">
											<h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
											<h4 className="text-lg font-medium text-primary mb-3">{exp.company}</h4>

											<div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
												<div className="flex items-center gap-1">
													<Calendar className="h-4 w-4" />
													{exp.period}
												</div>
												<div className="flex items-center gap-1">
													<MapPin className="h-4 w-4" />
													{exp.location}
												</div>
											</div>

											<p className="text-muted-foreground mb-4 font-medium">{exp.description}</p>

											<ul className="space-y-2 mb-4">
												{exp.achievements.map((achievement, idx) => (
													<li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
														<span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
														{achievement}
													</li>
												))}
											</ul>

											<div className="flex flex-wrap gap-2">
												{exp.technologies.map((tech) => (
													<span
														key={tech}
														className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium"
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;