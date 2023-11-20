import React, { useState } from "react";
import "./index.css";
import QuoteText from "./components/QuoteText";
import QuoteButton from "./components/QuoteButton";
import { quotes } from "./components/quotes.js";

function App() {
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  return (
    <div className="container">
      <div className="title">
        <h2>Random Inspirational Disney Quotes</h2>
      </div>
      <div className="text">
        <QuoteText quote={currentQuote} />
      </div>
      <div className="button">
        <QuoteButton onClick={() => setCurrentQuote(getRandomQuote())} />
      </div>
    </div>
  );
}

export default App;
