import React from "react";

import Card from "./Card";
import EmojiPedia from "../emojipedia.js";
function emojiCard(emo) {
  return (
    <Card
      key={emo.id}
      emoji={emo.emoji}
      name={emo.name}
      meaning={emo.meaning}
    />
  );
}

function List() {
  return (
    <div>
      <dl className="dictionary">{EmojiPedia.map(emojiCard)}</dl>
    </div>
  );
}

export default List;
