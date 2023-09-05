import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { A as API_BASE_URL } from "./config-4c6a8b08.js";
import axios from "axios";
import route from "ziggy-js";
import { router } from "@inertiajs/react";
function CreatePlayer() {
  const [data, setData] = useState({
    name: "",
    age: "",
    address: ""
  });
  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        API_BASE_URL + `/players`,
        data
      );
      if (response.status === 201) {
        router.visit("/");
      } else {
        console.log("Failed to create user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-zinc-800", children: /* @__PURE__ */ jsxs("main", { className: " fixed top-28 w-full left-96 h-full items-center justify-center text-sm text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "relative ", children: /* @__PURE__ */ jsx(Link, { href: route("player.index"), className: "text-sm text-white absolute bottom-full py-2", children: "Back" }) }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        className: "bg-gray-700 shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg text-white font-medium",
        onSubmit: handleSubmit,
        children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "mb-5", children: [
            /* @__PURE__ */ jsx("span", { children: "Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "name",
                name: "name",
                id: "name",
                onChange: handleInput,
                className: "w-full rounded border border-gray-300 bg-white p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800",
                placeholder: "Enter your name (max 255 Characters) ",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("label", { htmlFor: "password", className: "mb-5", children: [
            /* @__PURE__ */ jsx("span", { children: "Age" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "age",
                name: "age",
                id: "age",
                onChange: handleInput,
                className: "w-full rounded border border-gray-300 bg-white p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800",
                placeholder: "Enter your age (positive integers only)",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("label", { htmlFor: "address", className: "mb-5", children: [
            /* @__PURE__ */ jsx("span", { children: "Address" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "address",
                name: "address",
                id: "address",
                onChange: handleInput,
                className: "w-full rounded border border-gray-300 bg-white p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800",
                placeholder: "Enter your address (max 255 Characters)",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "mt-5 py-3 border rounded-md text-white", children: "Submit" })
        ]
      }
    )
  ] }) });
}
export {
  CreatePlayer as default
};
