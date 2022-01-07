import ReactDOM from "react-dom";
import Header from "nav/Header";
import {StoreProvider, useStore} from "store/store"

import "./index.scss";

const App = () => {
const { count, increment } = useStore()

return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: host-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <div>Count: {count}</div>
    <button onClick={increment}>Increment count</button>
  </div>
);
}
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("app"));
