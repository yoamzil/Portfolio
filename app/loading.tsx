export default function Loading() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="flex flex-col items-center space-y-4">
				{/* Animated spinner */}
				<div className="relative">
					<div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
				</div>

				{/* Loading text */}
				<div className="text-center">
					<h2 className="text-xl font-semibold text-foreground mb-2">Loading Portfolio</h2>
					<p className="text-muted-foreground">Preparing your experience...</p>
				</div>

				{/* Progress dots */}
				<div className="flex space-x-2">
					<div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
					<div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
					<div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
				</div>
			</div>
		</div>
	);
}
