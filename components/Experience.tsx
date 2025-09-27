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
      period: "2024 - Present",
      description: "Developing and maintaining user-facing features using modern technologies. Working on improving application performance and user experience.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js"]
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2023 - 2024",
      description: "Developed custom web applications for clients, from initial concept to deployment. Focused on creating responsive, performant solutions.",
      technologies: ["React", "JavaScript", "TailwindCSS", "MongoDB"]
    },
    {
      title: "Software Engineering Student",
      company: "ALX Africa",
      location: "Remote",
      period: "2023 - 2024",
      description: "Intensive full-stack development program covering algorithms, data structures, and modern web technologies.",
      technologies: ["Python", "C", "JavaScript", "SQL", "DevOps"]
    },
    {
      title: "Coding Student",
      company: "1337 Coding School",
      location: "Morocco",
      period: "2022 - Present",
      description: "Peer-to-peer learning environment focusing on C/C++ programming, algorithms, and system administration.",
      technologies: ["C", "C++", "Unix", "Git", "Algorithms"]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-secondary/20">
      <div className="container-width">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading text-center mb-16">Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>
              
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
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
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
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