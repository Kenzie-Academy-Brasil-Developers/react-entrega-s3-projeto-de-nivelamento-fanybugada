import "./style.css";

function Welcome({ goIn, setGoIn }) {
  return (
    <div
      style={goIn ? { display: "none" } : { display: "flex" }}
      className="welcomeContainer"
    >
      <h1>Televendas Kenzie</h1>
      <button onClick={() => setGoIn(true)}>Acessar</button>
    </div>
  );
}

export default Welcome;
