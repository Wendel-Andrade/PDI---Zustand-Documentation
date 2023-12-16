import { useCountStore } from "../stores/useCounterStore";

export function BearCounter() {
  const bears = useCountStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}
