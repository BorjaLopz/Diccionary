import "./style.css";

function LoadingComponent({ clicked }) {
  if (clicked) {
    return (
      <div className="grid gap-4 place-content-center items-center my-10">
        <span className="loader"></span>
      </div>
    );
  } else {
    ("");
  }
}

export default LoadingComponent;
