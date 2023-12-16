import { useShoppingCartStore } from "../../stores/useSliceStore";

export function ControlGameAndVideoGame() {
  const addGameAndVideoGame = useShoppingCartStore(
    (state) => state.addGameAndVideoGame
  );

  const removeGameAndVideoGame = useShoppingCartStore(
    (state) => state.removeGameAndVideoGame
  );

  return (
    <div>
      <button onClick={addGameAndVideoGame}>ADD GAME AND VIDEO GAME</button>
      <button onClick={removeGameAndVideoGame}>
        REMOVE GAME AND VIDEO GAME
      </button>
    </div>
  );
}
