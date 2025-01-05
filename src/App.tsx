import { useState, useEffect } from "react";
import Game from "./components/Game.js";
function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [gamesData, setGamesData] = useState([]);

  const searchGame = () => {
    fetch(
      `https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=10`
    )
      .then((response) => response.json())
      .then((data) => setGamesData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?pageSize=20")
      .then((response) => response.json())
      .then((data) => {
        setGamesData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-3 bg-background h-screen">
      <div className="searchSection">
        <h1 className="text-2xl text-center font-bold">Search for a Game🔎</h1>
        <div className="flex flex-col items-center mt-10 gap-5">
          <input
            type="text"
            className="border-2 rounded-md py-2 px-8"
            placeholder="gta,rdr2.."
            onChange={(event) => setGameTitle(event.target.value)}
          />
          <button
            className="bg-primary rounded-lg py-2 px-6 text-secondary hover:text-text hover:bg-secondary"
            onClick={searchGame}
          >
            Search
          </button>
        </div>
      </div>

      <div className="dealsSection mt-10 ">
        <h1 className="font-bold text-3xl text-center mb-5">Latest Deals🔥</h1>
        <div className="flex gap-4 flex-wrap justify-center">
          {gamesData.map((game, index) => (
            <Game game={game} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
