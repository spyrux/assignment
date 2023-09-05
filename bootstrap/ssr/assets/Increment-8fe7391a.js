import { jsx } from "react/jsx-runtime";
import "react";
import { A as API_BASE_URL } from "./config-4c6a8b08.js";
import axios from "axios";
import { BsPlusSquare } from "react-icons/bs/index.esm.js";
function Increment(props) {
  const headers = {
    "Content-Type": "application/json"
  };
  const playerId = props.playerId;
  const data = {
    "amount": 1
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        API_BASE_URL + `/players/${playerId}/increment`,
        data,
        { headers }
      );
      if (response.status === 200) {
        console.log(playerId, "successfully incremented");
        props.onIncrement(playerId, response.data.player);
      } else {
        console.log("Failed to increment player", playerId);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsx("button", { onClick: handleSubmit, children: /* @__PURE__ */ jsx(BsPlusSquare, { size: 18 }) }) });
}
export {
  Increment as default
};
