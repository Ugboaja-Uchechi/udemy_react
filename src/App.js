import Props from "./props";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Props
        name={{
          ingredients: "salt",
          aka: "tc"
        }}
        age={9}
      />
    </div>
  );
}
