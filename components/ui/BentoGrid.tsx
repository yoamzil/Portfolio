"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const DynamicLottie = dynamic(() => import('react-lottie'), {
	ssr: false,
	loading: () => <div className="w-full h-full" />
});

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto px-4 md:px-6 lg:px-8",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	id,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	id: number;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		if (typeof navigator !== 'undefined') {
			try {
				await navigator.clipboard.writeText("amzilyouness@gmail.com");
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			} catch (err) {
				console.error('Failed to copy:', err);
			}
		}
	};

	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1] hover:border-white/[0.2]",
				className
			)}
			style={{
				background: 'rgb(4, 7, 29)',
				backgroundColor: 'linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)',
			}}
		>
			<div className={`${id === 6 ? 'flex justify-center' : ''} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, 'object-cover, object-center')}
						/>
					)}
				</div>
				<div className={`absolute right-90 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className={"object-cover object-center w-full h-full"}
						/>
					)}
				</div>
				{id === 6 && (
					<BackgroundGradientAnimation>
					</BackgroundGradientAnimation>
				)}

				<div className={cn(
					titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10'
				)}>
					<div className="font-sans font-extralight text-[#c1c2d3] text-xs md:text-xs lg:text-base z-10">
						{description}
					</div>
					<div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
						{title}
					</div>
					{id === 3 && (
						<div className="flex gap-1 lg:gap-3 w-fit absolute top-0 md:top-20 lg:top-0 -right-3">
							<div className="flex flex-col gap-3 lg:gap-1">
								{['TypeScript', 'C++', 'TailwindCSS'].map((item) => (
									<span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-50 rounded-lg text-center bg-[#10132E]">
										{item}
									</span>
								))}
								<span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
							</div>
							<div className="flex flex-col gap-3 lg:gap-1">
								<span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
								{['Docker', 'Next.Js', 'C'].map((item) => (
									<span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-50 rounded-lg text-center bg-[#10132E]">
										{item}
									</span>
								))}
							</div>
						</div>
					)}
					{id === 6 && (
						<div className="mt-5 relative">
							<div className="absolute -bottom-5 right-0">
								{copied && (
									<DynamicLottie
										options={{
											loop: true,
											autoplay: true,
											animationData,
											rendererSettings: {
												preserveAspectRatio: 'xMidYMid slice',
											}
										}}
										height={400}
										width={400}
									/>
								)}
							</div>
							<MagicButton
								title={copied ? 'Email Copied!' : 'Copy my email'}
								icon={<IoCopyOutline />}
								position="left"
								otherClasses="!bg-[#161a31]"
								handleClick={handleCopy}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
