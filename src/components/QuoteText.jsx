import React from "react";

const QuoteText = (props) => (
  <div>
    <p>{props.quote.text}</p>
    <h3>{props.quote.speaker}</h3>
    <h4>{props.quote.movie}</h4>
  </div>
);

export default QuoteText;
