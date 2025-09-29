interface SkeletonProps {
	className?: string;
}

export const Skeleton = ({ className = "" }: SkeletonProps) => {
	return (
		<div
			className={`animate-pulse rounded-md bg-muted ${className}`}
		/>
	);
};

export const ProjectCardSkeleton = () => {
	return (
		<div className="glass-effect rounded-lg overflow-hidden">
			<Skeleton className="h-64 w-full" />
			<div className="p-6">
				<Skeleton className="h-6 w-3/4 mb-3" />
				<Skeleton className="h-4 w-full mb-2" />
				<Skeleton className="h-4 w-2/3 mb-4" />
				<div className="flex flex-wrap gap-2">
					<Skeleton className="h-6 w-16" />
					<Skeleton className="h-6 w-20" />
					<Skeleton className="h-6 w-14" />
				</div>
			</div>
		</div>
	);
};

export const ExperienceCardSkeleton = () => {
	return (
		<div className="glass-effect p-6 rounded-lg">
			<Skeleton className="h-6 w-3/4 mb-2" />
			<Skeleton className="h-5 w-1/2 mb-3" />
			<div className="flex flex-wrap items-center gap-4 mb-4">
				<Skeleton className="h-4 w-24" />
				<Skeleton className="h-4 w-20" />
			</div>
			<Skeleton className="h-4 w-full mb-4" />
			<div className="space-y-2 mb-4">
				<Skeleton className="h-3 w-full" />
				<Skeleton className="h-3 w-5/6" />
				<Skeleton className="h-3 w-4/5" />
			</div>
			<div className="flex flex-wrap gap-2">
				<Skeleton className="h-5 w-12" />
				<Skeleton className="h-5 w-16" />
				<Skeleton className="h-5 w-14" />
			</div>
		</div>
	);
};