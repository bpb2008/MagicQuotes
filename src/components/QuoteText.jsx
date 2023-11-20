import React from "react";

const QuoteText = (props) => {
  const { text, speaker, movie } = props.quote;
  return (
    <div>
      <p>{text}</p>
      <h3>{speaker}</h3>
      <h4>{movie}</h4>
    </div>
  );
};

export default QuoteText;
