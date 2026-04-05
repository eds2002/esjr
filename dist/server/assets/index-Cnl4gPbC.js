import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const works = [{
  year: "2026",
  items: [{
    title: "Grounded",
    type: "App",
    description: "Write what's on your mind, burn it, and get an encouraging quote back.",
    url: "/projects/grounded",
    internal: true
  }]
}, {
  year: "2025",
  items: [{
    title: "react-native-screen-transitions",
    type: "Open Source",
    description: "1.3k+ stars on GitHub. Customizable screen transitions for React Native.",
    url: "/projects/screen-transitions",
    internal: true
  }, {
    title: "Oak",
    type: "App",
    description: "Breathing exercise app with animated visuals. TestFlight.",
    url: "/projects/oak",
    internal: true
  }]
}];
function HomePage() {
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-background text-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-mono text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]", children: "Ed" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 font-mono text-sm text-tertiary", children: "Updated Apr 3, 2026" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16 space-y-5", children: [
      /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-secondary", children: "React Native engineer from New Jersey. I care about the details that make mobile apps feel alive — gestures, transitions, and motion that respond to your fingers." }),
      /* @__PURE__ */ jsxs("p", { className: "leading-relaxed text-secondary", children: [
        "I created",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://github.com/eds2002/react-native-screen-transitions", target: "_blank", rel: "noopener noreferrer", className: "text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors", children: "react-native-screen-transitions" }),
        ", an open-source library with 1,300+ stars for building the kind of screen transitions people thought required SwiftUI. I also built",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Grounded" }),
        ", a journaling app for turning heavy thoughts into something lighter."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "leading-relaxed text-secondary", children: [
        "Most of my work lives at the intersection of Reanimated, Skia, and Expo — where the hard parts of mobile animation happen. Open to new opportunities so feel free to",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:es23jr@gmail.com", className: "text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors", children: "reach out" }),
        "!"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm", children: [
      /* @__PURE__ */ jsx("a", { href: "https://x.com/trpfsu", target: "_blank", rel: "noopener noreferrer", className: "text-secondary hover:text-foreground transition-colors", children: "X @trpfsu" }),
      /* @__PURE__ */ jsx("a", { href: "https://github.com/eds2002", target: "_blank", rel: "noopener noreferrer", className: "text-secondary hover:text-foreground transition-colors", children: "GitHub" }),
      /* @__PURE__ */ jsx("a", { href: "mailto:es23jr@gmail.com", className: "text-secondary hover:text-foreground transition-colors", children: "Email" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-3xl md:text-4xl font-bold tracking-tight mb-10", children: "Work" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: works.map((group) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-mono text-sm text-tertiary mb-5", children: group.year }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: group.items.map((item) => {
          const content = /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-foreground group-hover:underline underline-offset-4", children: item.title }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-tertiary whitespace-nowrap", children: item.type })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-secondary text-sm leading-relaxed", children: item.description })
          ] });
          return item.internal ? /* @__PURE__ */ jsx(Link, { to: item.url, className: "group block", children: content }, item.title) : /* @__PURE__ */ jsx("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", className: "group block", children: content }, item.title);
        }) })
      ] }, group.year)) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "pt-8 border-t border-border", children: /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-tertiary", children: "New Jersey, USA" }) })
  ] }) });
}
export {
  HomePage as component
};
