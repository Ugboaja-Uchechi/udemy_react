import Profile from "./PropsChallenge/Profile";
import Props from "./props";
import "./styles.css";

export default function App() {
  const data = ["React 🌙", "Next 🌙"];
  return (
    <div className="App">
      <Props
        name={{
          ingredients: "salt",
          aka: "tc",
        }}
        age={9}
      />
      <Profile
        name={"Uchechi Ugboaja"}
        about={"I'm a frontend developer"}
        skills={data}
      />
    </div>
  );
}
