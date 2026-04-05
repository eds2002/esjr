import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function ScreenTransitionsPage() {
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-background text-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl px-6 py-16 md:py-24", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-sm text-tertiary hover:text-foreground transition-colors mb-12", children: [
      /* @__PURE__ */ jsx("span", { children: "←" }),
      " Index"
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-mono text-2xl font-bold tracking-tight text-foreground", children: "react-native-screen-transitions" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-tertiary", children: "2025" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-10 space-y-5 text-secondary leading-relaxed", children: [
      /* @__PURE__ */ jsx("p", { children: "A powerful, customizable screen transitions library for React Native. The kind of fluid, polished navigation animations that people assumed required SwiftUI — now possible with JavaScript." }),
      /* @__PURE__ */ jsx("p", { children: "1,300+ stars on GitHub. Used in production apps. Powered by Reanimated." })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "border-border mb-10" }),
    /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-lg font-bold tracking-tight mb-5", children: "Why this was built" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-secondary leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "I was inspired by gorgeous apps like Dropset and Family — and I noticed something: beautiful apps were almost always iOS-only. It felt like SwiftUI was the language for beautiful apps." }),
        /* @__PURE__ */ jsx("p", { children: "While learning SwiftUI and UIKit is still on my radar, I love React, I love React Native, and I felt a package like this was missing from the ecosystem. Apps that put real craft and style into their transitions and motion — that obsession is what started this." }),
        /* @__PURE__ */ jsx("p", { children: "This would not have been possible without the amazing work from the React Navigation team. Their JS stack and its super customizable API is what made the whole idea viable. And the incredible tools from Software Mansion — Reanimated, Gesture Handler — are what really put it all together." }),
        /* @__PURE__ */ jsx("p", { children: "We can now achieve gorgeous, 60fps transitions in React Native. The gap between beautiful apps made in SwiftUI and what's possible in React Native is closing. You can make beautiful apps for Android and iOS — and that's the beauty of React Native." }),
        /* @__PURE__ */ jsx("p", { children: "I'm super happy to present Screen Transitions: a highly customizable package that makes building the kind of transitions that used to feel out of reach, accessible to everyone." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "border-border mb-10" }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-mono text-lg font-bold tracking-tight mb-5", children: "What's next" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-secondary leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "The next big move is migrating to React Native Gesture Handler v3 and Reanimated v4. These tools have leveled up massively, and fully utilizing their power means screen transitions can be even more performant — smoother interruptions, better gesture composition, and tighter integration with the native layer." }),
        /* @__PURE__ */ jsx("p", { children: "The goal hasn't changed: close the gap between SwiftUI-quality transitions and what's possible in React Native. We're getting there." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm", children: [
      /* @__PURE__ */ jsx("a", { href: "https://github.com/eds2002/react-native-screen-transitions", target: "_blank", rel: "noopener noreferrer", className: "text-secondary hover:text-foreground transition-colors", children: "GitHub" }),
      /* @__PURE__ */ jsx("a", { href: "https://www.npmjs.com/package/react-native-screen-transitions", target: "_blank", rel: "noopener noreferrer", className: "text-secondary hover:text-foreground transition-colors", children: "npm" })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "pt-8 border-t border-border", children: /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-tertiary", children: "New Jersey, USA" }) })
  ] }) });
}
export {
  ScreenTransitionsPage as component
};
