import { createRootRoute, HeadContent, Outlet, Scripts, createFileRoute, lazyRouteComponent, createRouter as createRouter$1 } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const Route$4 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ed — React Native Engineer" },
      {
        name: "description",
        content: "React Native engineer specializing in gestures, animations, and screen transitions. Creator of react-native-screen-transitions."
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css"
      }
    ]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$3 = () => import("./index-Cnl4gPbC.js");
const Route$3 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./projects.screen-transitions-Dt-kMaim.js");
const Route$2 = createFileRoute("/projects/screen-transitions")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./projects.oak-nO-B_vtj.js");
const Route$1 = createFileRoute("/projects/oak")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./projects.grounded-DSAE1vSy.js");
const Route = createFileRoute("/projects/grounded")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const ProjectsScreenTransitionsRoute = Route$2.update({
  id: "/projects/screen-transitions",
  path: "/projects/screen-transitions",
  getParentRoute: () => Route$4
});
const ProjectsOakRoute = Route$1.update({
  id: "/projects/oak",
  path: "/projects/oak",
  getParentRoute: () => Route$4
});
const ProjectsGroundedRoute = Route.update({
  id: "/projects/grounded",
  path: "/projects/grounded",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  ProjectsGroundedRoute,
  ProjectsOakRoute,
  ProjectsScreenTransitionsRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
function createRouter() {
  const router = createRouter$1({
    routeTree,
    scrollRestoration: false
  });
  return router;
}
function getRouter() {
  return createRouter();
}
export {
  createRouter,
  getRouter
};
