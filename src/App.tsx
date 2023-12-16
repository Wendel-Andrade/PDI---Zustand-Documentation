import "./App.css";
import { BearCounter } from "./components/BearCounter";
import { Controls } from "./components/Controls";
import { GameStore } from "./components/GameStore/GameStore";
import { ManagePerson } from "./components/ManagePerson";
import { UserForm } from "./components/UserForm";

function App() {
  return (
    <>
      <BearCounter />
      <Controls />
      <UserForm />
      <ManagePerson />
      <GameStore />
    </>
  );
}

export default App;
