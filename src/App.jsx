import React, { useState } from "react";
import "./index.css";
import QuoteText from "./components/QuoteText";
import QuoteButton from "./components/QuoteButton";

const quotes = [
  {
    text: "Ohana means family, and family means nobody gets left behind...or forgotten.",
    speaker: "Stitch",
    movie: "Lilo and Stitch, 2002",
  },
  {
    text: "The flower that blooms in adversity is the most rare and beautiful of all.",
    speaker: "The Emperor of China",
    movie: "Mulan, 1998",
  },
  {
    text: "If you do your best each and every day, good things are sure to come your way.",
    speaker: "Tiana",
    movie: "The Princess and the Frog, 2009",
  },
  {
    text: "Our fate lives within us. You only have to be brave enough to see it.",
    speaker: "Merida",
    movie: "Brave, 2012",
  },
  {
    text: "Always let your conscience be your guide.",
    speaker: "The Blue Fairy",
    movie: "Pinocchio, 1940",
  },
  {
    text: "I never look back, darling! It distracts from the now.",
    speaker: "Edna Mode",
    movie: "The Incredibles, 2004",
  },
  {
    text: "To infinity...and beyond!",
    speaker: "Buzz Lightyear",
    movie: "Toy Story, 1995",
  },
  {
    text: "Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.",
    speaker: "Rafiki",
    movie: "The Lion King, 1994",
  },
  {
    text: "Even miracles take a little time.",
    speaker: "Fairy Godmother",
    movie: "Cinderella, 1950",
  },
  {
    text: "The only thing predictable about life is its unpredictability.",
    speaker: "Remy",
    movie: "Ratatouille, 2007",
  },
  {
    text: "A true hero isn't measured by the size of his strength but by the strength of his heart.",
    speaker: "Hera",
    movie: "Hercules, 1997",
  },
  {
    text: "You are braver than you believe, steonger than you seem and smarter than you think.",
    speaker: "Winnie The Pooh",
    movie: "The Many Adventures of Winnie The Pooh, 1977",
  },
  {
    text: "Sometimes our stengths lie beneath the surface.",
    speaker: "Moana",
    movie: "Moana, 2016",
  },
  {
    text: "The only limit is your imagination.",
    speaker: "Hiro",
    movie: "Big Hero 6, 2014",
  },
  {
    text: "The heart is not so easily changed but the head can be persuaded.",
    speaker: "Grand Pabbie",
    movie: "Frozen, 2013",
  },
];

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
