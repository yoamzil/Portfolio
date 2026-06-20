"use client";
import { useEffect, useRef, useState } from "react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Projects Completed",
    description: "Diverse range of applications"
  },
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
    description: "Continuous learning journey"
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies",
    description: "Modern tech stack mastery"
  }
];

const StatItem = ({ stat, isVisible, index }: {
  stat: typeof stats[0];
  isVisible: boolean;
  index: number;
}) => {
  const animatedValue = useAnimatedCounter(stat.value, 2000, isVisible);
  return (
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="mb-2">
        <span className="text-3xl md:text-4xl font-bold text-primary">
          {animatedValue}
        </span>
        <span className="text-3xl md:text-4xl font-bold text-primary">
          {stat.suffix}
        </span>
      </div>
      <h3 className="text-sm md:text-base font-semibold mb-1">{stat.label}</h3>
      <p className="text-xs md:text-sm text-muted-foreground">{stat.description}</p>
    </div>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-secondary/10">
      <div className="container-width">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;