export const navItems = [
	{ name: "Home", link: "#" },
	{ name: "About", link: "#about" },
	{ name: "Experience", link: "#experience" },
	{ name: "Projects", link: "#projects" },
	{ name: "Contact", link: "#contact" },
];

export const projects = [
	{
		id: 1,
		title: "Movie App",
		des: "Movie Finder application that allows users to search for movies and view trending movies using the TMDB API.",
		img: "/movieApp.png",
		iconLists: [
			"/re.svg",
			"/vite.svg",
			"/tail.svg",
			"/js.svg",
			"/appWrite.svg",
		],
		link: "https://yoamzilmovie.vercel.app//",
	},
	{
		id: 2,
		title: "Drum Kit",
		des: "A working drum kit uses keyboard and mouse clicks to play sounds made with vanilla JavaScript.",
		img: "/drumkit2.png",
		iconLists: ["/html.svg", "/css.svg", "/js.svg"],
		link: "https://yoamzildrumkit.vercel.app/",
	},
	{
		id: 3,
		title: "So_Long",
		des: "A small 2D Game made using the MiniLibX Graphics Library, Textures, sprites and tiles included.",
		img: "/so_long.png",
		iconLists: ["/c_lang.svg"],
		link: "https://github.com/yoamzil/42_So_long",
	},
	{
		id: 4,
		title: "The Current Portfolio",
		des: "Simple and stylish portfolio using Next.js, Tailwind CSS, and Framer Motion.",
		img: "/portfo.png",
		iconLists: [
			"/next.svg",
			"/tail.svg",
			"/ts.svg",
			"/three.svg",
			"/fm.svg",
		],
		link: "https://www.amzilyouness.me/",
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
	title: "Full Stack Developer crafting digital experiences with clean code and modern technologies",
	ctaText: "Learn More",
};

// Contact information
export const contactInfo = {
	email: "amzilyouness@gmail.com",
	location: "Morocco",
	availability: "Remote Work",
};
