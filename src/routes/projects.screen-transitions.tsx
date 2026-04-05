import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/screen-transitions')({
  component: ScreenTransitionsPage,
})

function ScreenTransitionsPage() {
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
            react-native-screen-transitions
          </h1>
          <p className="mt-2 text-sm text-tertiary">2025</p>
        </header>

        {/* Intro */}
        <section className="mb-10 space-y-5 text-secondary leading-relaxed">
          <p>
            A powerful, customizable screen transitions library for React
            Native. The kind of fluid, polished navigation animations that
            people assumed required SwiftUI — now possible with JavaScript.
          </p>
          <p>
            1,300+ stars on GitHub. Used in production apps. Powered by
            Reanimated.
          </p>
        </section>

        <hr className="border-border mb-10" />

        {/* Why this was built */}
        <section className="mb-10">
          <h2 className="font-mono text-lg font-bold tracking-tight mb-5">
            Why this was built
          </h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              I was inspired by gorgeous apps like Dropset and Family — and I
              noticed something: beautiful apps were almost always iOS-only.
              It felt like SwiftUI was the language for beautiful apps.
            </p>
            <p>
              While learning SwiftUI and UIKit is still on my radar, I love
              React, I love React Native, and I felt a package like this was
              missing from the ecosystem. Apps that put real craft and style
              into their transitions and motion — that obsession is what
              started this.
            </p>
            <p>
              This would not have been possible without the amazing work from
              the React Navigation team. Their JS stack and its super
              customizable API is what made the whole idea viable. And the
              incredible tools from Software Mansion — Reanimated, Gesture
              Handler — are what really put it all together.
            </p>
            <p>
              We can now achieve gorgeous, 60fps transitions in React Native.
              The gap between beautiful apps made in SwiftUI and what's
              possible in React Native is closing. You can make beautiful
              apps for Android and iOS — and that's the beauty of React
              Native.
            </p>
            <p>
              I'm super happy to present Screen Transitions: a highly
              customizable package that makes building the kind of transitions
              that used to feel out of reach, accessible to everyone.
            </p>
          </div>
        </section>

        <hr className="border-border mb-10" />

        {/* What's next */}
        <section className="mb-16">
          <h2 className="font-mono text-lg font-bold tracking-tight mb-5">
            What's next
          </h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              The next big move is migrating to React Native Gesture Handler
              v3 and Reanimated v4. These tools have leveled up massively,
              and fully utilizing their power means screen transitions can be
              even more performant — smoother interruptions, better gesture
              composition, and tighter integration with the native layer.
            </p>
            <p>
              The goal hasn't changed: close the gap between SwiftUI-quality
              transitions and what's possible in React Native. We're getting
              there.
            </p>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <a
            href="https://github.com/eds2002/react-native-screen-transitions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/react-native-screen-transitions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-foreground transition-colors"
          >
            npm
          </a>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <p className="font-mono text-sm text-tertiary">
            New Jersey, USA
          </p>
        </footer>
      </div>
    </main>
  )
}
