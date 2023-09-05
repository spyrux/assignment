import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => resolvePageComponent(`./component/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./component/CreatePlayer.jsx": () => import("./assets/CreatePlayer-061e04db.js"), "./component/Decrement.jsx": () => import("./assets/Decrement-80af4839.js"), "./component/Delete.jsx": () => import("./assets/Delete-48a4bc3a.js"), "./component/Error.jsx": () => import("./assets/Error-09890a0f.js"), "./component/Increment.jsx": () => import("./assets/Increment-8fe7391a.js"), "./component/Leaderboard.jsx": () => import("./assets/Leaderboard-850f9880.js"), "./component/ViewPlayer.jsx": () => import("./assets/ViewPlayer-6b481202.js") })),
    setup({ el, App, props }) {
      createRoot(el).render(/* @__PURE__ */ jsx(App, { ...props }));
    }
  })
);
