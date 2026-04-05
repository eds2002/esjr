import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/oak")({
	component: OakPage,
});

function OakPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
				{/* Back link */}
				<Link
					to="/"
					className="inline-flex items-center gap-1.5 text-sm text-tertiary hover:text-foreground transition-colors mb-12"
				>
					<span>&#8592;</span> Index
				</Link>

				{/* Header */}
				<header className="mb-10">
					<h1 className="font-mono text-2xl font-bold tracking-tight text-foreground">
						Oak
					</h1>
					<p className="mt-2 text-sm text-tertiary">2025</p>
				</header>

				{/* Intro */}
				<section className="mb-10 space-y-5 text-secondary leading-relaxed">
					<p>
						A breathing exercise app inspired by the Apple Watch Breathe app —
						rebuilt entirely in React Native. Oak was a hobby project that
						doubled as a playground for learning Skia and Reanimated, and ended
						up being the first iteration of what became screen transitions.
					</p>
				</section>

				{/* Video — home screen */}
				<div className="mb-10 rounded-lg overflow-hidden ">
					<video
						src="/assets/home.oak.mp4"
						autoPlay
						loop
						muted
						playsInline
						className="w-full"
					/>
				</div>

				{/* The idea */}
				<section className="mb-10">
					<h2 className="font-mono text-lg font-bold tracking-tight mb-5">
						The idea
					</h2>
					<div className="space-y-4 text-secondary leading-relaxed">
						<p>
							I saw the Breathe app on Apple Watch and thought — it would be
							cool to see something like this in React Native. Not a basic timer
							with an expanding circle, but something that actually feels
							calming to use. The kind of thing where the animation itself helps
							you breathe, not just counts for you.
						</p>
						<p>
							It was also a chance to go deep on Skia and Reanimated in a real
							project. I wanted to understand what these tools could really do
							when you pushed them — and Oak gave me that.
						</p>
					</div>
				</section>

				{/* The animation */}
				<section className="mb-10">
					<h2 className="font-mono text-lg font-bold tracking-tight mb-5">
						The animation
					</h2>
					<div className="space-y-4 text-secondary leading-relaxed">
						<p>
							The breathing visualization was the core challenge — it needed to
							feel organic and calming, not mechanical. Built with Skia and
							Reanimated, running on the UI thread at 60fps. It also integrates
							haptics that sync with each breath cycle, so you feel a gentle
							pulse guiding you through the inhale and exhale without needing to
							stare at the screen.
						</p>
					</div>
				</section>

				{/* Video — breathe animation */}
				<div className="mb-10 rounded-lg overflow-hidden ">
					<video
						src="/assets/breathe-animation.oak.mp4"
						autoPlay
						loop
						muted
						playsInline
						className="w-full"
					/>
					<p className="px-4 py-3 text-sm text-tertiary text-center">
						Breathing animation guiding inhale and exhale cycles.
					</p>
				</div>

				{/* What it became */}
				<section className="mb-16">
					<h2 className="font-mono text-lg font-bold tracking-tight mb-5">
						What it became
					</h2>
					<div className="space-y-4 text-secondary leading-relaxed">
						<p>
							Oak stayed on TestFlight — it was always more of a learning
							project than a product launch. But the work that went into it is
							what eventually became react-native-screen-transitions. The
							animation patterns, the Reanimated knowledge, the feel for what
							makes motion work on mobile — all of that started here.
						</p>
					</div>
				</section>

				{/* Footer */}
				<footer className="pt-8 border-t border-border">
					<p className="font-mono text-sm text-tertiary">New Jersey, USA</p>
				</footer>
			</div>
		</main>
	);
}
