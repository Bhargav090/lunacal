import React from "react";
import Top from "./Rightelements/Top";
import Bottom from "./Rightelements/Bottom";
import { BrowserRouter } from "react-router-dom";

export default function Rightpart() {
  return (
    <div className="right">
      <BrowserRouter>
        <Top />
      </BrowserRouter>
      <hr class="line" />
      <Bottom />
      <hr class="line" />
    </div>
  );
}
