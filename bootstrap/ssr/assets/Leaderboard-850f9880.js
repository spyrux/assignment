import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { InertiaLink } from "@inertiajs/inertia-react";
import Increment from "./Increment-8fe7391a.js";
import Decrement from "./Decrement-80af4839.js";
import { BsArrowUpSquare, BsArrowDownSquare } from "react-icons/bs/index.esm.js";
import Delete from "./Delete-48a4bc3a.js";
import "./config-4c6a8b08.js";
import "axios";
function Leaderboard(props) {
  const [players, setPlayers] = useState(props.players);
  const [isDescending, setIsDescending] = useState(true);
  const [isAlphabetical, setIsAlphabetical] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [displayPlayers, setDisplayPlayers] = useState(props.players);
  const handleFilterChange = (e) => {
    const newText = e.target.value;
    setFilterText(newText);
    let filtered = [...players];
    if (newText !== "") {
      filtered = players.filter(
        (player) => player.name.toLowerCase().includes(newText.toLowerCase())
      );
    }
    if (isDescending === true) {
      filtered.sort((a, b) => b.points - a.points);
    } else if (isDescending === false) {
      filtered.sort((a, b) => a.points - b.points);
    }
    setDisplayPlayers(filtered);
  };
  function onDelete(id) {
    console.log("deleting user id", id);
    const newPlayers = [...players];
    const newDisplayPlayers = [...displayPlayers];
    const playerIndex = newPlayers.findIndex((player) => player.id === id);
    const displayPlayerIndex = newDisplayPlayers.findIndex((player) => player.id === id);
    newDisplayPlayers.splice(displayPlayerIndex, 1);
    newPlayers.splice(playerIndex, 1);
    setDisplayPlayers(newDisplayPlayers);
    setPlayers(newPlayers);
  }
  function onNameOrder() {
    const newPlayers = [...displayPlayers];
    if (isAlphabetical == null) {
      newPlayers.sort((a, b) => a.name.localeCompare(b.name));
      setDisplayPlayers(newPlayers);
      setIsAlphabetical(true);
    } else {
      setIsAlphabetical((isAlphabetical2) => {
        console.log("Previous isAlphabetical is: ", isAlphabetical2);
        if (!isAlphabetical2 === true) {
          newPlayers.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          newPlayers.sort((a, b) => b.name.localeCompare(a.name));
        }
        setDisplayPlayers(newPlayers);
        return !isAlphabetical2;
      });
    }
  }
  function onPointOrderAsc() {
    const newPlayers = [...displayPlayers];
    newPlayers.sort((a, b) => a.points - b.points);
    setDisplayPlayers(newPlayers);
    setIsDescending((isDescending2) => {
      console.log("Previous isDescending is: ", isDescending2);
      return false;
    });
  }
  function onPointOrderDes() {
    const newPlayers = [...displayPlayers];
    newPlayers.sort((a, b) => b.points - a.points);
    setDisplayPlayers(newPlayers);
    setIsDescending((isDescending2) => {
      console.log("Previous isDescending is: ", isDescending2);
      return true;
    });
  }
  function onUpdate(id, data) {
    console.log("Received id:", id);
    console.log("Received data:", data);
    const newPlayers = [...displayPlayers];
    const playerIndex = newPlayers.findIndex((player) => player.id === id);
    if (playerIndex !== -1) {
      newPlayers[playerIndex] = data;
    }
    if (isDescending === true) {
      newPlayers.sort((a, b) => b.points - a.points);
    }
    if (isDescending === false) {
      newPlayers.sort((a, b) => a.points - b.points);
    }
    setDisplayPlayers(newPlayers);
  }
  return /* @__PURE__ */ jsx("div", { className: "fixed left-0 w-full h-full flex justify-center bg-zinc-700", children: players && /* @__PURE__ */ jsxs("div", { className: "relative top-10", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        className: " left-9 p-2 w-60 mx-1 my-2 text-sm rounded-sm",
        type: "text",
        placeholder: "Type to filter",
        value: filterText,
        onChange: (e) => handleFilterChange(e)
      }
    ),
    /* @__PURE__ */ jsxs("article", { className: " overflow-auto h-[500px] w-[800px] text-sm font-medium text-white bg-gray-700 border-gray-500 rounded-lg", children: [
      /* @__PURE__ */ jsx("h1", { className: "p-3 text-center  text-lg border-t border-r border-l border-gray-400 rounded-t", children: "Leaderboard" }),
      /* @__PURE__ */ jsx(Reorder.Group, { values: displayPlayers, onReorder: setDisplayPlayers, drag: false, children: /* @__PURE__ */ jsxs("table", { className: "min-w-full leading-normal", children: [
        /* @__PURE__ */ jsx("thead", { className: "p-1 text-center ", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "p-1 text-center border border-gray-400", children: /* @__PURE__ */ jsx("button", { className: " px-3", onClick: onNameOrder, children: "Name " }) }),
          /* @__PURE__ */ jsxs("th", { className: "p-1 text-center border border-gray-400 ", children: [
            "Points",
            isDescending ? /* @__PURE__ */ jsx("button", { className: " px-3", onClick: onPointOrderAsc, children: /* @__PURE__ */ jsx(BsArrowUpSquare, {}) }) : /* @__PURE__ */ jsx("button", { className: " px-3", onClick: onPointOrderDes, children: /* @__PURE__ */ jsx(BsArrowDownSquare, {}) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: displayPlayers.map(
          (player) => /* @__PURE__ */ jsxs(Reorder.Item, { as: "tr", value: player, drag: false, className: "bg-gray-600", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 text-left border font-normal border-gray-400", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ jsx(Delete, { className: "pl-5", onDeleteButton: onDelete, playerId: player.id }),
              /* @__PURE__ */ jsx(InertiaLink, { href: route("player.view", { id: player.id }), className: "pl-5", children: player.name })
            ] }) }),
            /* @__PURE__ */ jsx("td", { className: "p-2 text-center border border-gray-400", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Increment, { onIncrement: onUpdate, playerId: player.id }),
              /* @__PURE__ */ jsx("p", { className: "pb-1.5", children: player.points }),
              /* @__PURE__ */ jsx(Decrement, { onDecrement: onUpdate, playerId: player.id })
            ] }) })
          ] }, player.id)
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative top-2", children: /* @__PURE__ */ jsx(
      InertiaLink,
      {
        href: route("player.create"),
        className: "absolute top-full right-2 text-center py-2 text-sm border rounded-lg bg-white w-32",
        type: "button",
        children: "Create Player"
      }
    ) })
  ] }) });
}
export {
  Leaderboard as default
};
