import NoWordFoundComponent from "../NoWordFoundComponent/NoWordFoundComponent";

function WordComponent({ wordMeaning, wordHeadwordPronunciation, clicked }) {
  return (
    <>
      {wordMeaning !== undefined ? (
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
                    {
                      wordHeadwordPronunciation[0]?.headword?.pronunciation
                        ?.value
                    }
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
                wordMeaning.senses.map((word) => {
                  return (
                    <li>
                      <p>{word.definition}</p>
                    </li>
                  );
                })}
            </ol>
          </section>
        </section>
      ) : (
        <NoWordFoundComponent clicked={clicked} />
      )}
    </>
  );
}

export default WordComponent;
