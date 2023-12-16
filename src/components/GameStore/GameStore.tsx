import { ControlGame } from "./ControlGame";
import { ControlGameAndVideoGame } from "./ControlGameAndVideoGame";
import { ControlVideoGame } from "./ControlVideoGame";

export function GameStore() {
  return (
    <div>
      <ControlVideoGame />
      <ControlGame />
      <ControlGameAndVideoGame />
    </div>
  );
}
