import { useRef } from "react";
import { BearContext } from "../context/BearContext";
import { useCountStore } from "../stores/useCounterStore";
import { createBearStore } from "../stores/useBearContextStore";

import { BasicConsumer } from "./BasicConsumer";

import "./styles.css";

export function Controls() {
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const reset = useCountStore((state) => state.reset);

  const store = useRef(createBearStore()).current;

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <BearContext.Provider value={store}>
        <BasicConsumer />
      </BearContext.Provider>
    </div>
  );
}
