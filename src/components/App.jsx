import React from "react";
import Cards from "./Card";
import emojis from "../emojipedia";
function App() {
  const getEmoji = ({ id, name, emoji, meaning }) => {
    return <Cards key={id} name={name} emoji={emoji} meaning={meaning} />;
  };
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojis.map(getEmoji)}</dl>
    </div>
  );
}

export default App;
