import React from "react";
import { useStore } from "store/store";

export default () => {
  const { count, clear } = useStore();

  return (
    <header className="mt-10 flex bg-blue-500">
      THIS IS THE HEADER FROM REMOTE-APP1 - Count: {count}
      <button className="flex bg-white" onClick={clear}>
        CLEAR
      </button>
    </header>
  );
};
