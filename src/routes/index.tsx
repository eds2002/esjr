import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomePage,
});

const works = [
	{
		year: "2026",
		items: [
			{
				title: "Grounded",
				type: "App",
				description:
					"Write what's on your mind, burn it, and get an encouraging quote back.",
				url: "/projects/grounded",
				internal: true,
			},
		],
	},
	{
		year: "2025",
		items: [
			{
				title: "react-native-screen-transitions",
				type: "Open Source",
				description:
					"1.3k+ stars on GitHub. Customizable screen transitions for React Native.",
				url: "/projects/screen-transitions",
				internal: true,
			},
			{
				title: "Oak",
				type: "App",
				description:
					"Breathing exercise app with animated visuals. TestFlight.",
				url: "/projects/oak",
				internal: true,
			},
		],
	},
];

function HomePage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
				{/* Header */}
				<header className="mb-16">
					<h1 className="font-mono text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
						Ed
					</h1>
					<p className="mt-3 font-mono text-sm text-tertiary">
						Updated Apr 3, 2026
					</p>
				</header>

				{/* Bio */}
				<section className="mb-16 space-y-5">
					<p className="leading-relaxed text-secondary">
						React Native engineer from New Jersey. I care about the details that
						make mobile apps feel alive — gestures, transitions, and motion that
						respond to your fingers.
					</p>
					<p className="leading-relaxed text-secondary">
						I created{" "}
						<a
							href="https://github.com/eds2002/react-native-screen-transitions"
							target="_blank"
							rel="noopener noreferrer"
							className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
						>
							react-native-screen-transitions
						</a>
						, an open-source library with 1,300+ stars, 9K+ weekly installs for building the kind of
						screen transitions people thought required SwiftUI. I also built{" "}
						<span className="text-foreground">Grounded</span>, a journaling app
						for turning heavy thoughts into something lighter.
					</p>
					<p className="leading-relaxed text-secondary">
						Most of my work lives at the intersection of Reanimated, Skia, and
						Expo — where the hard parts of mobile animation happen.
					</p>
				</section>

				{/* Availability */}
				<section className="mb-16">
					<p className="leading-relaxed text-secondary">
						Available for remote React Native roles — contract or full-time.{" "}
						<a
							href="mailto:es23jr@gmail.com"
							className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
						>
							Reach out
						</a>
						.
					</p>
				</section>

				{/* Links */}
				<section className="mb-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
					<a
						href="https://x.com/trpfsu"
						target="_blank"
						rel="noopener noreferrer"
						className="text-secondary hover:text-foreground transition-colors"
					>
						X @trpfsu
					</a>
					<a
						href="https://github.com/eds2002"
						target="_blank"
						rel="noopener noreferrer"
						className="text-secondary hover:text-foreground transition-colors"
					>
						GitHub
					</a>
					<a
						href="mailto:es23jr@gmail.com"
						className="text-secondary hover:text-foreground transition-colors"
					>
						Email
					</a>
				</section>

				{/* Work */}
				<section className="mb-16">
					<h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight mb-10">
						Work
					</h2>

					<div className="space-y-12">
						{works.map((group) => (
							<div key={group.year}>
								<h3 className="font-mono text-sm text-tertiary mb-5">
									{group.year}
								</h3>
								<div className="space-y-6">
									{group.items.map((item) => {
										const content = (
											<>
												<div className="flex items-baseline justify-between gap-4">
													<h4 className="text-lg font-medium text-foreground group-hover:underline underline-offset-4">
														{item.title}
													</h4>
													<span className="font-mono text-xs text-tertiary whitespace-nowrap">
														{item.type}
													</span>
												</div>
												<p className="mt-1 text-secondary text-sm leading-relaxed">
													{item.description}
												</p>
											</>
										);

										return item.internal ? (
											<Link
												key={item.title}
												to={item.url}
												className="group block"
											>
												{content}
											</Link>
										) : (
											<a
												key={item.title}
												href={item.url}
												target="_blank"
												rel="noopener noreferrer"
												className="group block"
											>
												{content}
											</a>
										);
									})}
								</div>
							</div>
						))}
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
