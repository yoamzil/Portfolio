"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { projects } from '@/data';
import { ProjectCardSkeleton } from './ui/Skeleton';

const Projects = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({});
	const [isLoading, setIsLoading] = useState(true);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					// Simulate loading time for demonstration
					setTimeout(() => setIsLoading(false), 800);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	// Use the projects data directly with simplified technologies array
	const transformedProjects = projects.map(project => ({
		title: project.title,
		description: project.des,
		image: project.img,
		technologies: project.technologies,
		liveUrl: project.link,
		githubUrl: project.link.includes('github.com') ? project.link : "https://github.com/yoamzil"
	}));

	const handleImageLoad = (projectTitle: string) => {
		setImagesLoaded(prev => ({ ...prev, [projectTitle]: true }));
	};

	return (
		<section ref={sectionRef} id="projects" className="section-padding">
			<div className="container-width">
				<div
					className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
						}`}
				>
					<h2 className="heading text-center mb-6">Featured Projects</h2>
					<p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
						A curated collection of my most impactful and innovative work
					</p>

					<div className="grid md:grid-cols-2 gap-8">
						{isLoading ? (
							// Show skeleton loading cards
							Array.from({ length: 4 }).map((_, index) => (
								<ProjectCardSkeleton key={index} />
							))
						) : (
							transformedProjects.map((project, index) => (
								<div
									key={project.title}
									className={`group glass-effect rounded-lg overflow-hidden hover:shadow-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
										}`}
									style={{ transitionDelay: `${index * 200}ms` }}
								>
									<div className="relative h-64 overflow-hidden">
										{!imagesLoaded[project.title] && (
											<div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
										)}
										<Image
											src={project.image}
											alt={project.title}
											fill
											loading="lazy"
											placeholder="blur"
											blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											className={`object-cover object-top group-hover:scale-105 transition-transform duration-300 ${imagesLoaded[project.title] ? 'opacity-100' : 'opacity-0'
												}`}
											onLoad={() => handleImageLoad(project.title)}
										/>
										<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
											<a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
												aria-label="View live project"
											>
												<ExternalLink className="h-5 w-5 text-white" />
											</a>
											<a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
												aria-label="View source code"
											>
												<Github className="h-5 w-5 text-white" />
											</a>
										</div>
									</div>

									<div className="p-6">
										<h3 className="text-xl font-semibold mb-3">{project.title}</h3>
										<p className="text-muted-foreground mb-4 leading-relaxed">
											{project.description}
										</p>

										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech, techIndex) => (
												<span
													key={tech}
													className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:scale-105"
													style={{
														animationDelay: `${techIndex * 100}ms`,
														animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
													}}
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;