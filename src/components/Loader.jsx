import "../styles/Loader.css";

function Loader({ text = "Loading products..." }) {
  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
      <p className="loader-text">{text}</p>
    </div>
  );
}

export default Loader;
