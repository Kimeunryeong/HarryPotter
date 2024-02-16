import React, { useEffect, useState } from "react";

export default function Spell() {
  const urlToFetch = "https://harry-potter-api-en.onrender.com/spells";
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const spellsArray = data.spells || []; // 수정된 부분
        setSpells(spellsArray);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {spells.map((sp) => (
        <div key={sp.id}>
          <div className="text-white">{sp.spell}</div>
          <div>{sp.use}</div>
        </div>
      ))}
    </div>
  );
}
