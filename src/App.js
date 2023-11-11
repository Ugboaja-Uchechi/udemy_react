import Profile from "./PropsChallenge/Profile";
import Props from "./props";
import "./styles.css";
import RenderingList from "./RenderingList";

const dat = [
  {
    car: "benz",
    shoe: "converse",
  },
    {
    car: "audi",
    shoe: "nike",
  },
]

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
      <RenderingList props={dat} />
    </div>
  );
}
