"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/yoamzil", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yoamzil/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/youness__amzil", label: "Twitter" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container-width text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Youness
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer crafting digital experiences with clean code and modern technologies
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <a
            href="#about"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            <span>Learn More</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;