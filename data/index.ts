export const navItems = [
	{ name: "Home", link: "#" },
	{ name: "About", link: "#about" },
	{ name: "Learning", link: "#learning" },
	{ name: "Experience", link: "#experience" },
	{ name: "Projects", link: "#projects" },
	{ name: "Contact", link: "#contact" },
];

export const projects = [
	{
		id: 1,
		title: "Movie Discovery Platform",
		des: "Full-stack movie discovery application with real-time search functionality and trending content. Integrated TMDB API for comprehensive movie data, implemented responsive design with optimized image loading and caching strategies.",
		img: "/movieApp.png",
		technologies: [
			"React",
			"Vite",
			"TailwindCSS",
			"JavaScript",
			"AppWrite",
		],
		link: "https://yoamzilmovie.vercel.app//",
	},
	{
		id: 2,
		title: "DataFlow App",
		des: "Full-stack platform with a user-friendly interface for managing client data and transactions. Built with Next.js, TypeScript, and Tailwind CSS, featuring multi-language support and offline capabilities.",
		img: "/dataflow.png",
		technologies: [
			"Next.js",
			"TailwindCSS",
			"TypeScript",
			"Prisma",
			"SQLite",
		],
		link: "https://www.amzilyouness.me/",
	},
	{
		id: 4,
		title: "Inception",
		des: "Multi-container web infrastructure built from scratch using Docker orchestration. Architected secure, scalable deployment with custom Dockerfiles for each service, SSL/TLS encryption, and automated service discovery.",
		img: "/container.png",
		technologies: [
			"Docker",
			"Docker Compose",
			"Nginx",
			"MariaDB",
			"WordPress",
		],
		link: "https://github.com/yoamzil/42_Inception",
	},
	{
		id: 3,
		title: "So_Long Game",
		des: "2D game built from scratch using MiniLibX graphics library. Implemented sprite rendering, collision detection, texture mapping, and game state management with optimized memory allocation.",
		img: "/so_long.png",
		technologies: ["C", "MiniLibX", "Graphics Programming"],
		link: "https://github.com/yoamzil/42_So_long",
	},
];

// Social media links for components (with icon names for dynamic rendering)
export const socialLinks = [
	{
		icon: "Github",
		label: "GitHub",
		href: "https://github.com/yoamzil",
	},
	{
		icon: "Linkedin",
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/yoamzil/",
	},
	{
		icon: "Twitter",
		label: "Twitter",
		href: "https://x.com/youness__amzil",
	},
];

// Hero section content
export const heroContent = {
	greeting: "Hi, I'm",
	name: "Youness",
	title: "Crafting robust solutions through clean code",
	subtitle: "Full Stack Developer specializing in modern web technologies",
	ctaText: "Learn More",
};

// Contact information
export const contactInfo = {
	email: "amzilyouness@gmail.com",
	location: "Morocco",
	availability: "Remote Work",
};
