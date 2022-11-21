import "./App.css";
import Develop from "./components/Developer";

function App() {
  const developers = [
    {
      nameUser: "Saniel Nascimento",
      idade: 30,
      país: "Brasil",
    },
    {
      nameUser: "João Thiago",
      idade: 22,
      país: "Brasil",
    },
    {
      nameUser: "Julia Coelho",
      idade: 24,
      país: "Brasil",
    },
    {
      nameUser: "Leonardo Rosa",
      idade: 28,
      país: "Brasil",
    }
  ];
  return (
    <div className="App">
      {
      developers.map(({ nameUser, idade, país }, index) => <Develop key={index} name={nameUser} age={idade} country={país} />)
      }
    </div>
  );
}

export default App;
