import { useState } from "react";
import "./styles.css";
import NoWordFoundComponent from "../NoWordFoundComponent/NoWordFoundComponent";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import WordComponent from "../WordComponent/WordComponent";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4dee4cdc81msh2b38413c17134e5p1a635cjsne9c7d8dbee2c",
    "X-RapidAPI-Host": "lexicala1.p.rapidapi.com",
  },
};

const options_2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "970d4e8724msh0af10a4207e09adp16f8f4jsn0aa601995d22",
    "X-RapidAPI-Host": "lexicala1.p.rapidapi.com",
  },
};

const options_3 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d760d22cd1msh39217c657c77351p1a2f58jsn98b2ea35e969",
    "X-RapidAPI-Host": "lexicala1.p.rapidapi.com",
  },
};

function MainComponent() {
  const [word, setWord] = useState("");
  const [wordHeadwordPronunciation, setWordHeadwordPronunciation] = useState();
  const [wordMeaning, setWordMeaning] = useState();
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleInput = (e) => {
    setWord(e.target.value.toLowerCase());
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setClicked(true);

      const resp = await fetch(
        `https://lexicala1.p.rapidapi.com/search-entries?text=${word}`,
        options
      );
      const data = await resp.json();

      const respMeaning = await fetch(
        `https://lexicala1.p.rapidapi.com/search?text=${word}&language=es`,
        options
      );
      setLoading(false);
      const dataMeaning = await respMeaning.json();

      // console.log(data.results[0]);
      // console.log(dataMeaning.results);

      setWordHeadwordPronunciation(data.results);
      setWordMeaning(dataMeaning.results[0]);
      console.log("wordHeadwordPronunciation");
      console.log(wordHeadwordPronunciation);
      console.log("wordMeaning");
      console.log(wordMeaning);
    } catch (e) {
      console.error(e);
    }
  };

  console.log("wordHeadwordPronunciation");
  console.log(wordHeadwordPronunciation);
  console.log("wordMeaning");
  console.log(wordMeaning);

  return (
    <article>
      <section id="inputSection">
        <form onSubmit={handleClick}>
          <input
            type="text"
            onChange={handleInput}
            placeholder="Introduce la palabra a buscar..."
            required
          />
          <button type="submit">Buscar</button>
        </form>
      </section>
      {loading ? (
        <LoadingComponent clicked={clicked} />
      ) : (
        <WordComponent
          wordMeaning={wordMeaning}
          wordHeadwordPronunciation={wordHeadwordPronunciation}
          clicked={clicked}
        />
      )}
    </article>
  );
}

export default MainComponent;
