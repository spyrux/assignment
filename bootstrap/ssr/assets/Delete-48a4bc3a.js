import { jsx } from "react/jsx-runtime";
import "react";
import { A as API_BASE_URL } from "./config-4c6a8b08.js";
import axios from "axios";
import { BsXSquare } from "react-icons/bs/index.esm.js";
function Delete(props) {
  const headers = {
    "Content-Type": "application/json"
  };
  const playerId = props.playerId;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        API_BASE_URL + `/players/${playerId}`,
        { headers }
      );
      if (response.status === 200) {
        console.log(playerId, "successfully deleted");
        props.onDeleteButton(playerId, response.data.player);
      } else {
        console.log("Failed to decrement user", playerId);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsx("button", { onClick: handleSubmit, children: /* @__PURE__ */ jsx(BsXSquare, { size: 18 }) }) });
}
export {
  Delete as default
};
