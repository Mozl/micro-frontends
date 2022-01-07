import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import {StoreProvider} from "store/store"

import "./index.scss";

const App = () => {
return (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);
}
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("app"));
