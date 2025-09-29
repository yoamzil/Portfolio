"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface LazyImageProps {
	src: string;
	alt: string;
	className?: string;
	fill?: boolean;
	width?: number;
	height?: number;
	priority?: boolean;
	onLoad?: () => void;
}

const LazyImage = ({
	src,
	alt,
	className = "",
	fill = false,
	width,
	height,
	priority = false,
	onLoad
}: LazyImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);
	const imgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold: 0.1,
				rootMargin: '50px' // Start loading 50px before coming into view
			}
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const handleLoad = () => {
		setIsLoaded(true);
		onLoad?.();
	};

	return (
		<div ref={imgRef} className={`relative overflow-hidden ${className}`}>
			{/* Loading skeleton */}
			{!isLoaded && (
				<div className="absolute inset-0 bg-muted animate-pulse" />
			)}

			{/* Image */}
			{(isInView || priority) && (
				<Image
					src={src}
					alt={alt}
					fill={fill}
					width={!fill ? width : undefined}
					height={!fill ? height : undefined}
					className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
						}`}
					onLoad={handleLoad}
					priority={priority}
					loading={priority ? "eager" : "lazy"}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			)}
		</div>
	);
};

export default LazyImage;