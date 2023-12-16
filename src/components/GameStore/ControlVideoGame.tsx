import { useShoppingCartStore } from "../../stores/useSliceStore";

export function ControlVideoGame() {
  const videoGame = useShoppingCartStore((state) => state.videoGame);
  const addVideoGame = useShoppingCartStore((state) => state.addVideoGame);
  const removeVideoGame = useShoppingCartStore(
    (state) => state.removeVideoGame
  );

  return (
    <div>
      <h2>Video Game: {videoGame}</h2>
      <button onClick={addVideoGame}>ADD VIDEO GAME</button>
      <button onClick={removeVideoGame}>REMOVE VIDEO GAME</button>
    </div>
  );
}
