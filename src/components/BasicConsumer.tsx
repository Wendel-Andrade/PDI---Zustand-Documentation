import { useBearStoreContext } from "../context/BearContext";

export function BasicConsumer() {
  const bears = useBearStoreContext((state) => state.bears);
  const addBear = useBearStoreContext((state) => state.addBear);
  const removeBear = useBearStoreContext((state) => state.removeBear);
  const resetBear = useBearStoreContext((state) => state.resetBear);

  return (
    <>
      <h2>{bears} Bears</h2>
      <button onClick={addBear}>Add bear</button>
      <button onClick={removeBear}>Remove bear</button>
      <button onClick={resetBear}>Reset bear</button>
    </>
  );
}
