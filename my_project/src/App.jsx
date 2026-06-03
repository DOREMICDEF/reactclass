import { useState } from "react";
import "./App.css";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchPokemon = async () => {
    if (pokemonName.trim() === "") {
      setError("포켓몬 이름을 입력하세요.");
      setPokemon(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setPokemon(null);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );

      if (!response.ok) {
        throw new Error("포켓몬을 찾을 수 없습니다.");
      }

      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      searchPokemon();
    }
  };

  return (
    <div className="container">
      <h1>포켓몬 도감</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="예: pikachu"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button onClick={searchPokemon}>검색</button>
      </div>

      {loading && <p>불러오는 중...</p>}

      {error && <p className="error">{error}</p>}

      {pokemon && (
        <div className="card">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          <h2>{pokemon.name}</h2>

          <p>번호: {pokemon.id}</p>
          <p>키: {pokemon.height}</p>
          <p>몸무게: {pokemon.weight}</p>

          <p>
            타입:{" "}
            {pokemon.types.map((item) => item.type.name).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;