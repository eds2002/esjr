import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/grounded")({
	component: GroundedPage,
});

function GroundedPage() {
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
						Grounded
					</h1>
					<p className="mt-2 text-sm text-tertiary">2026</p>
				</header>

				{/* Intro */}
				<section className="mb-10 space-y-5 text-secondary leading-relaxed">
					<p>
						Write what's on your mind, burn it, and get an encouraging quote
						back. Grounded is a journaling app built around one idea: the act of
						letting go should feel real.
					</p>
				</section>

				{/* Where it came from */}
				<section className="mb-10">
					<h2 className="font-mono text-lg font-bold tracking-tight mb-5">
						Where it came from
					</h2>
					<div className="space-y-4 text-secondary leading-relaxed">
						<p>
							When I was a kid, my mom and I used to write things down on paper
							and burn them. It wasn't therapy — it was just something we did
							for fun. Kind of odd looking back at it now, but years later I
							realized that it was almost therapeutic. Turns out there are
							well-documented studies on the psychological benefits of writing
							down your thoughts and symbolically destroying them.
						</p>
						<p>
							That memory stuck with me. My idea was simple: can I bring that
							experience to a phone? And more importantly — can I make the burn
							animation realistic enough that someone actually feels like the
							thought is being burned away?
						</p>
					</div>
				</section>

				{/* Video — burn animation */}
				<div className="mb-10 rounded-lg overflow-hidden">
					<video
						src="/assets/note.grounded.mp4"
						autoPlay
						loop
						muted
						playsInline
						className="w-full"
					/>
				</div>

				{/* The challenge */}
				<section className="mb-10">
					<h2 className="font-mono text-lg font-bold tracking-tight mb-5">
						The challenge
					</h2>
					<div className="space-y-4 text-secondary leading-relaxed">
						<p>
							The whole thing lives or dies on the burn. If it looks fake, the
							illusion breaks and it's just another notes app with a gimmick. So
							I went deep on the animation — using Skia to render realistic
							fire, ash particles, and paper curl effects that respond to the
							content on screen.
						</p>
						<p>
							The goal was immersion. If someone writes down a heavy thought and
							watches it catch fire, curl at the edges, and dissolve into
							nothing — they should feel something. That's the whole point.
						</p>
					</div>
				</section>

				{/* Video — zoom transition */}
				<div className="mb-10 rounded-lg overflow-hidden">
					<video
						src="/assets/zoom.grounded.mp4"
						autoPlay
						loop
						muted
						playsInline
						className="w-full"
					/>
				</div>

				{/* Reflection */}
				<section className="mb-16">
					<h2 className="font-mono text-lg font-bold tracking-tight mb-5">
						Why it matters to me
					</h2>
					<div className="space-y-4 text-secondary leading-relaxed">
						<p>
							I'm super proud of how the animation came out. It's the kind of
							project where the technical challenge and the emotional purpose
							are the same thing — making something feel real enough to work.
							The burn had to be convincing, or the whole concept falls apart.
						</p>
						<p>
							Grounded was also a chance to showcase what screen transitions can
							do — and how far you can push beautiful, polished apps with
							regular JavaScript. I love React Native, and if I can contribute
							to the ecosystem by helping people build gorgeous looking apps,
							then I'm happy.
						</p>
						<p>
							Grounded started as a childhood memory and turned into something I
							genuinely think can help people.
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
