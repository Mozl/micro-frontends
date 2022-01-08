"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreProvider = exports.useStore = exports.clear = exports.increment = exports.counterSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
exports.counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        clear: (state) => {
            state.count = 0;
        },
    },
});
// Action creators are generated for each case reducer function
_a = exports.counterSlice.actions, exports.increment = _a.increment, exports.clear = _a.clear;
const store = (0, toolkit_1.configureStore)({
    reducer: {
        counter: exports.counterSlice.reducer
    },
});
function useStore() {
    const count = (0, react_redux_1.useSelector)((store) => store.counter.count);
    const dispatch = (0, react_redux_1.useDispatch)();
    return {
        count,
        increment: () => dispatch((0, exports.increment)()),
        clear: () => dispatch((0, exports.clear)()),
    };
}
exports.useStore = useStore;
function StoreProvider({ children }) {
    return React.createElement(react_redux_1.Provider, { store: store }, children);
}
exports.StoreProvider = StoreProvider;
//# sourceMappingURL=store.js.map