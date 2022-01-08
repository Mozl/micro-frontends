"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
const Header_1 = (0, tslib_1.__importDefault)(require("nav/Header"));
const store_1 = require("store/store");
require("./index.scss");
const App = () => {
    const { count, increment } = (0, store_1.useStore)();
    return (react_1.default.createElement("div", { className: "mt-10 text-3xl mx-auto max-w-6xl" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("div", null, "Name: host-app"),
        react_1.default.createElement("div", null, "Framework: react"),
        react_1.default.createElement("div", null, "Language: TypeScript"),
        react_1.default.createElement("div", null, "CSS: Tailwind"),
        react_1.default.createElement("div", null,
            "Count: ",
            count),
        react_1.default.createElement("button", { onClick: increment }, "Increment count")));
};
react_dom_1.default.render(react_1.default.createElement(store_1.StoreProvider, null,
    react_1.default.createElement(App, null)), document.getElementById("app"));
//# sourceMappingURL=App.js.map