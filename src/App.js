import { useState } from "react";
import "./App.css";
import { Card } from "./Components/Card/Card";

function App() {
  const [chosenColour, setChosenColour] = useState();

  return (
    <div className="App">
      <header className="App-header">Therapy Dolls Prototype</header>
      <main className="container">
        <div className="doll-container">
          Doll
          <div
            className={
              chosenColour === "blue" ? "head blue-head" : "head yellow-head"
            }
          ></div>
        </div>
        <div className="choice-container">
          <Card setChosenColour={setChosenColour} />
        </div>
      </main>
    </div>
  );
}

export default App;
