const Game = ({ game }) => {
  return (
    <div className="max-w-sm bg-background border border-gray-200 rounded-lg shadow p-2 text-text ">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-[200px] object-center"
          src={game.thumb}
          alt=""
        />
      </a>
      <div className="p-5 w-full">
        <a href="#">
          <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 ">
            {game.title}
          </h5>
        </a>
        <div>
          <button className="py-2 px-3 bg-primary text-secondary rounded-lg">
            Normal Price : {game.normalPrice}
          </button>
          <button className="py-2 px-3 bg-primary text-secondary ml-2 rounded-lg">
            Sale Price : {game.salePrice}
          </button>
        </div>
        <h1 className="mt-2">Rating⭐️ : {game.steamRatingPercent}</h1>
      </div>
    </div>
  );
};

export default Game;
