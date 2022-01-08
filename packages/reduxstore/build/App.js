"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
require("./index.scss");
const App = () => (react_1.default.createElement("div", { className: "mt-10 text-3xl mx-auto max-w-6xl" },
    react_1.default.createElement("div", null, "Name: redux-store"),
    react_1.default.createElement("div", null, "Framework: react"),
    react_1.default.createElement("div", null, "Language: TypeScript"),
    react_1.default.createElement("div", null, "CSS: Tailwind")));
const rootElement = document.getElementById('app');
react_dom_1.default.render(react_1.default.createElement(App, null), rootElement);
//# sourceMappingURL=App.js.map