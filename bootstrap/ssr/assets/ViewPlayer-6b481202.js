import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import route from "ziggy-js";
function ViewPlayer(props) {
  const player = props.player;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center min-h-screen bg-zinc-700", children: [
    /* @__PURE__ */ jsx(InertiaLink, { className: "text-sm text-white relative bottom-28 left-8", href: route("player.index"), children: "Back" }),
    /* @__PURE__ */ jsxs("ul", { className: "items-center justify-center w-[300px] text-xl text-white bg-gray-700 border-gray-500 border-collapse", children: [
      /* @__PURE__ */ jsxs("li", { className: "p-2 border rounded border-slate-200", children: [
        "Name : ",
        player.name
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "p-2 border rounded border-slate-200", children: [
        "Age : ",
        player.age
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "p-2 border rounded border-slate-200", children: [
        "Address : ",
        player.address
      ] }),
      /* @__PURE__ */ jsxs("li", { className: "p-2 border rounded border-slate-200", children: [
        "Points : ",
        player.points
      ] })
    ] })
  ] }) });
}
export {
  ViewPlayer as default
};
