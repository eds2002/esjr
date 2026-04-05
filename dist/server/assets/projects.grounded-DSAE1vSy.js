import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function GroundedPage() {
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-background text-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm text-tertiary hover:text-foreground transition-colors mb-12", children: [
      /* @__PURE__ */ jsx("span", { children: "←" }),
      " Index"
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-mono text-2xl font-bold tracking-tight text-foreground", children: "Grounded" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-tertiary", children: "2026" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mb-10 space-y-5 text-secondary leading-relaxed", children: /* @__PURE__ */ jsx("p", { children: "Write what's on your mind, burn it, and get an encouraging quote back. Grounded is a journaling app built around one idea: the act of letting go should feel real." }) }),
    /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-lg font-bold tracking-tight mb-5", children: "Where it came from" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-secondary leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "When I was a kid, my mom and I used to write things down on paper and burn them. It wasn't therapy — it was just something we did for fun. Kind of odd looking back at it now, but years later I realized that it was almost therapeutic. Turns out there are well-documented studies on the psychological benefits of writing down your thoughts and symbolically destroying them." }),
        /* @__PURE__ */ jsx("p", { children: "That memory stuck with me. My idea was simple: can I bring that experience to a phone? And more importantly — can I make the burn animation realistic enough that someone actually feels like the thought is being burned away?" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-10 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("video", { src: "/assets/note.grounded.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full" }) }),
    /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-lg font-bold tracking-tight mb-5", children: "The challenge" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-secondary leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "The whole thing lives or dies on the burn. If it looks fake, the illusion breaks and it's just another notes app with a gimmick. So I went deep on the animation — using Skia to render realistic fire, ash particles, and paper curl effects that respond to the content on screen." }),
        /* @__PURE__ */ jsx("p", { children: "The goal was immersion. If someone writes down a heavy thought and watches it catch fire, curl at the edges, and dissolve into nothing — they should feel something. That's the whole point." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-10 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("video", { src: "/assets/zoom.grounded.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full" }) }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-lg font-bold tracking-tight mb-5", children: "Why it matters to me" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-secondary leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "I'm super proud of how the animation came out. It's the kind of project where the technical challenge and the emotional purpose are the same thing — making something feel real enough to work. The burn had to be convincing, or the whole concept falls apart." }),
        /* @__PURE__ */ jsx("p", { children: "Grounded was also a chance to showcase what screen transitions can do — and how far you can push beautiful, polished apps with regular JavaScript. I love React Native, and if I can contribute to the ecosystem by helping people build gorgeous looking apps, then I'm happy." }),
        /* @__PURE__ */ jsx("p", { children: "Grounded started as a childhood memory and turned into something I genuinely think can help people." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "pt-8 border-t border-border", children: /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-tertiary", children: "New Jersey, USA" }) })
  ] }) });
}
export {
  GroundedPage as component
};
