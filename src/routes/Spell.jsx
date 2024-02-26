import React, { useEffect, useState } from "react";
import translation from "../locales/ko/translation.json";
import Layout from "../components/Layout";

const urlToFetch = "https://harry-potter-api-en.onrender.com/db";

export default function Spell() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const spellArray = data.spells || [];
        setSpells(spellArray);
      })
      .catch((e) => console.log(e));
  }, []); // 빈 배열로 설정

  return (
    <Layout>
      <div className="w-full">
        <div className="w-[1300px] m-auto mt-16">
          <h1 className="text-4xl mb-16">Spells</h1>
          <div>
            {spells.map((spell) => (
              <div className="mb-12 text-2xl" key={spell.id}>
                <p>Name: {spell.spell}</p>
                <p>Effect: {spell.use}</p>
                <p>{getKoreanTranslation(spell.id)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );

  function getKoreanTranslation(id) {
    const translationData = translation.find((spell) => spell.id === id);
    return translationData ? translationData.use : "번역 없음";
  }
}
