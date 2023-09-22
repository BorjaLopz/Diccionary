import "./styles.css";

function NoWordFoundComponent({ clicked }) {
  if (clicked) {
    return (
      <section id="notFoundWord">
        <p>No hemos podido encontrar la palabra que buscar</p>
      </section>
    );
  } else {
    return;
  }
}

export default NoWordFoundComponent;
