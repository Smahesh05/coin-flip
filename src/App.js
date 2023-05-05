import "./styles.css";
import { useState } from "react";

export default function App() {
  const [coin, setCoin] = useState({ head: 0, tail: 0 });
  const [result, setResult] = useState(null);

  const flipCoin = () => {
    const number = Math.floor(Math.random() * 2);
    console.log(number);
    if (number === 0) {
      setResult("head");
      setCoin({ ...coin, head: coin.head + 1 });
    } else {
      setResult("tail");
      setCoin({ ...coin, tail: coin.tail + 1 });
    }
  };
  return (
    <div className="App">
      <h2>Flip coin!</h2>
      <button className="btn btn-primary" onClick={flipCoin}>
        Flip
      </button>
      <div className="result">
        <div className="result-wrapper">Result : {result}</div>
        <div className="count-wrapper">
          <span>head:{coin.head}</span>
          <br />
          <span>tail : {coin.tail}</span>
        </div>
      </div>
    </div>
  );
}
