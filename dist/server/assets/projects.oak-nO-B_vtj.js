import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function OakPage() {
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-background text-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm text-tertiary hover:text-foreground transition-colors mb-12", children: [
      /* @__PURE__ */ jsx("span", { children: "←" }),
      " Index"
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-mono text-2xl font-bold tracking-tight text-foreground", children: "Oak" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-tertiary", children: "2025" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mb-10 space-y-5 text-secondary leading-relaxed", children: /* @__PURE__ */ jsx("p", { children: "A breathing exercise app inspired by the Apple Watch Breathe app — rebuilt entirely in React Native. Oak was a hobby project that doubled as a playground for learning Skia and Reanimated, and ended up being the first iteration of what became screen transitions." }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-10 rounded-lg overflow-hidden ", children: /* @__PURE__ */ jsx("video", { src: "/assets/home.oak.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full" }) }),
    /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-lg font-bold tracking-tight mb-5", children: "The idea" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-secondary leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "I saw the Breathe app on Apple Watch and thought — it would be cool to see something like this in React Native. Not a basic timer with an expanding circle, but something that actually feels calming to use. The kind of thing where the animation itself helps you breathe, not just counts for you." }),
        /* @__PURE__ */ jsx("p", { children: "It was also a chance to go deep on Skia and Reanimated in a real project. I wanted to understand what these tools could really do when you pushed them — and Oak gave me that." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-lg font-bold tracking-tight mb-5", children: "The animation" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 text-secondary leading-relaxed", children: /* @__PURE__ */ jsx("p", { children: "The breathing visualization was the core challenge — it needed to feel organic and calming, not mechanical. Built with Skia and Reanimated, running on the UI thread at 60fps. It also integrates haptics that sync with each breath cycle, so you feel a gentle pulse guiding you through the inhale and exhale without needing to stare at the screen." }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-10 rounded-lg overflow-hidden ", children: [
      /* @__PURE__ */ jsx("video", { src: "/assets/breathe-animation.oak.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full" }),
      /* @__PURE__ */ jsx("p", { className: "px-4 py-3 text-sm text-tertiary text-center", children: "Breathing animation guiding inhale and exhale cycles." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-lg font-bold tracking-tight mb-5", children: "What it became" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 text-secondary leading-relaxed", children: /* @__PURE__ */ jsx("p", { children: "Oak stayed on TestFlight — it was always more of a learning project than a product launch. But the work that went into it is what eventually became react-native-screen-transitions. The animation patterns, the Reanimated knowledge, the feel for what makes motion work on mobile — all of that started here." }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "pt-8 border-t border-border", children: /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-tertiary", children: "New Jersey, USA" }) })
  ] }) });
}
export {
  OakPage as component
};
