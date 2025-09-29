import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsSection from "@/components/StatsSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingContactButton from "@/components/FloatingContactButton";

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Header />
			<Hero />
			<About />
			<StatsSection />
			<Experience />
			<Projects />
			<Contact />
			<FloatingContactButton />
		</main>
	);
}