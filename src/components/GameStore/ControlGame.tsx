import { useShoppingCartStore } from "../../stores/useSliceStore";

export function ControlGame() {
  const game = useShoppingCartStore((state) => state.game);
  const addGame = useShoppingCartStore((state) => state.addGame);
  const removeGame = useShoppingCartStore((state) => state.removeGame);

  return (
    <div>
      <h2>Game: {game}</h2>
      <button onClick={addGame}>ADD GAME</button>
      <button onClick={removeGame}>REMOVE GAME</button>
    </div>
  );
}
