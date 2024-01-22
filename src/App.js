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
];

export default function App() {
  const data = ["React", "React", "Next"];
  const getData = {
    React: "🍩",
    Next: "🌙",
  };

  const getEmoji = (dat) => {
    return getData[dat];
  };

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
      {data.map((item) => (
        <div>
          <p>
            {item}
            <span>{getEmoji(item)}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
