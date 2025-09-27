"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
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

  const projects = [
    {
      title: "Movie Finder App",
      description: "A responsive movie discovery application built with React and TMDB API. Features search functionality, trending movies, and detailed movie information.",
      image: "/movieApp.png",
      technologies: ["React", "Vite", "TailwindCSS", "JavaScript", "API"],
      liveUrl: "https://yoamzilmovie.vercel.app/",
      githubUrl: "https://github.com/yoamzil"
    },
    {
      title: "Interactive Drum Kit",
      description: "A fun, interactive drum kit that responds to both keyboard and mouse inputs. Built with vanilla JavaScript for optimal performance.",
      image: "/drumkit2.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://yoamzildrumkit.vercel.app/",
      githubUrl: "https://github.com/yoamzil"
    },
    {
      title: "So_Long Game",
      description: "A 2D game developed using MiniLibX graphics library. Features sprite animations, collision detection, and tile-based level design.",
      image: "/so_long.png",
      technologies: ["C", "MiniLibX", "Graphics"],
      liveUrl: "#",
      githubUrl: "https://github.com/yoamzil/42_So_long"
    },
    {
      title: "Portfolio Website",
      description: "A clean, fast, and responsive portfolio website built with Next.js. Optimized for performance and accessibility.",
      image: "/portfo.png",
      technologies: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
      liveUrl: "https://www.amzilyouness.me/",
      githubUrl: "https://github.com/yoamzil"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="container-width">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group glass-effect rounded-lg overflow-hidden hover:shadow-xl transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                    {project.technologies.map((tech) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;