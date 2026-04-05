import { jsx, jsxs } from "react/jsx-runtime";
import "./router-7HehYH50.js";
import "@tanstack/react-router";
const works = [{
  year: "2026",
  items: [{
    title: "Grounded",
    type: "App",
    description: "Write what's on your mind, burn it, and get an encouraging quote back.",
    url: "#"
  }]
}, {
  year: "2025",
  items: [{
    title: "react-native-screen-transitions",
    type: "Open Source",
    description: "1.3k+ stars on GitHub. Shared element transitions for React Native.",
    url: "https://github.com/eds2002/react-native-screen-transitions"
  }, {
    title: "immersive-overlay-example",
    type: "Open Source",
    description: "297 stars. Immersive overlay transitions demo.",
    url: "https://github.com/eds2002/immersive-overlay-example"
  }, {
    title: "react-native-morph",
    type: "Open Source",
    description: "Morphing transitions for React Native views.",
    url: "https://github.com/eds2002/react-native-morph"
  }]
}];
function HomePage() {
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-background text-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-5xl md:text-6xl tracking-tight text-foreground leading-[1.1]", children: "Eduardo Sanchez" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 font-mono text-sm text-tertiary", children: "Updated Apr 3, 2026" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16 space-y-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-secondary", children: "React Native engineer from New Jersey. I care about the details that make mobile apps feel alive — gestures, transitions, and motion that respond to your fingers." }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg leading-relaxed text-secondary", children: [
        "I created",
        " ",
        /* @__PURE__ */ jsx("a", { href: "https://github.com/eds2002/react-native-screen-transitions", target: "_blank", rel: "noopener noreferrer", className: "text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors", children: "react-native-screen-transitions" }),
        ", an open-source library with 1,300+ stars that brings shared element transitions to React Native. I also built",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Grounded" }),
        ", a journaling app for turning heavy thoughts into something lighter."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-secondary", children: "Most of my work lives at the intersection of Reanimated, Skia, and Expo — where the hard parts of mobile animation happen." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm", children: [
      /* @__PURE__ */ jsx("a", { href: "https://x.com/trpfsu", target: "_blank", rel: "noopener noreferrer", className: "text-secondary hover:text-foreground transition-colors", children: "X @trpfsu" }),
      /* @__PURE__ */ jsx("a", { href: "https://github.com/eds2002", target: "_blank", rel: "noopener noreferrer", className: "text-secondary hover:text-foreground transition-colors", children: "GitHub" }),
      /* @__PURE__ */ jsx("a", { href: "mailto:es23jr@gmail.com", className: "text-secondary hover:text-foreground transition-colors", children: "Email" })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "border-border mb-16" }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-4xl tracking-tight mb-10", children: "Work" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: works.map((group) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-mono text-sm text-tertiary mb-5", children: group.year }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: group.items.map((item) => /* @__PURE__ */ jsxs("a", { href: item.url, target: "_blank", rel: "noopener noreferrer", className: "group block", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between gap-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-foreground group-hover:underline underline-offset-4", children: item.title }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-tertiary whitespace-nowrap", children: item.type })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-secondary text-sm leading-relaxed", children: item.description })
        ] }, item.title)) })
      ] }, group.year)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border bg-background px-6 py-5 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxs("span", { className: "relative flex h-3 w-3", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" }),
        /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-green-500" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Available for contracts" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-secondary mt-0.5", children: "React Native, Expo, animations & gestures" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "pt-8 border-t border-border", children: /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-tertiary", children: "New Jersey, USA" }) })
  ] }) });
}
export {
  HomePage as component
};
