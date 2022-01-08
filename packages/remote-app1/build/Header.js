"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const store_1 = require("store/store");
exports.default = () => {
    const { count, clear } = (0, store_1.useStore)();
    return (react_1.default.createElement("header", { className: "mt-10 flex bg-blue-500" },
        "THIS IS THE HEADER FROM REMOTE-APP1 - Count: ",
        count,
        react_1.default.createElement("button", { className: "flex bg-white", onClick: clear }, "CLEAR")));
};
//# sourceMappingURL=Header.js.map