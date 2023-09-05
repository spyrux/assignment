import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { InertiaLink } from "@inertiajs/inertia-react";
function Error(props) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "fixed top-40 left-[500px] w-full h-full items-center justify-center", children: [
    /* @__PURE__ */ jsx(InertiaLink, { className: "text-sm", to: `/`, children: "Back" }),
    /* @__PURE__ */ jsx("p", { children: "You have encountered an error!" }),
    /* @__PURE__ */ jsx("p", { children: props.error })
  ] }) });
}
export {
  Error as default
};
