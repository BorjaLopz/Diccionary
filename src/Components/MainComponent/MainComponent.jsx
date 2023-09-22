import { useState } from "react";
import "./styles.css";

const options_2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "970d4e8724msh0af10a4207e09adp16f8f4jsn0aa601995d22",
    "X-RapidAPI-Host": "lexicala1.p.rapidapi.com",
  },
};

const options = {
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

  const handleInput = (e) => {
    setWord(e.target.value.toLowerCase());
  };

  const handleClick = async () => {
    try {
      const resp = await fetch(
        `https://lexicala1.p.rapidapi.com/search-entries?text=${word}`,
        options
      );
      const data = await resp.json();

      const respMeaning = await fetch(
        `https://lexicala1.p.rapidapi.com/search?text=${word}&language=es`,
        options
      );

      const dataMeaning = await respMeaning.json();

      // console.log(data.results[0]);
      // console.log(dataMeaning.results);

      setWordHeadwordPronunciation(data.results);

      setWordMeaning(dataMeaning.results[0]);
    } catch (e) {
      console.error(e);
    }
  };

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

      <section id="wordMeaningSection">
        <section id="wordSection">
          <section id="wordTypeOfWord">
            <h3>{wordMeaning?.headword?.text}</h3>
            <h4>{wordMeaning?.headword?.pos}</h4>
          </section>
          <section id="wordPronuctiation">
            {wordHeadwordPronunciation !== undefined ? (
              <>
                <h3>Pronunciación</h3>
                <h4>
                  {wordHeadwordPronunciation[0]?.headword?.pronunciation?.value}
                </h4>
              </>
            ) : (
              ""
            )}
          </section>
        </section>

        <section id="meaningSection">
          <ol>
            {wordMeaning &&
              wordMeaning.senses.map((w) => {
                return (
                  <li>
                    <p>{w.definition}</p>
                  </li>
                );
              })}
          </ol>
        </section>
      </section>
    </article>
  );
}

export default MainComponent;
