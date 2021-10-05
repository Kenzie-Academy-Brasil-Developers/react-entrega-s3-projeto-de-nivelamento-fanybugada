import "./App.css";
import Welcome from "./Components/Welcome";
import { useState } from "react";
import Dashboard from "./Components/Dashboard";

function App() {
  const [goIn, setGoIn] = useState(false);

  return (
    <div className="App">
      <Welcome goIn={goIn} setGoIn={setGoIn} />
      <Dashboard goIn={goIn} />
    </div>
  );
}

export default App;
