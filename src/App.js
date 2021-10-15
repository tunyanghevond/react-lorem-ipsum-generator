import { useState } from "react";
import text from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(index);
    if (index <= 0) {
      amount = 1;
    }
    if (index > 8) {
      amount = 8;
    }
    setData(text.slice(0, amount));
  };
  return (
    <section className="section">
      <h1 className="title">Tired of boring lorem ipsum</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="asd">Lable:</label>
        <input
          type="number"
          onChange={(e) => setIndex(e.target.value)}
          id="asd"
        />
        <button type="submit" className="btn">
          ADD
        </button>
      </form>
      <div className="text">
        {data.map((el, ind) => {
          return <p key={ind}>{el}</p>;
        })}
      </div>
    </section>
  );
}

export default App;
