import React, { useEffect, useState } from "react";

const Spell = () => {
  const urlToFetch = "https://harry-potter-api-en.onrender.com/spells";
  const [spell, setSpell] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlToFetch);
        const data = await response.json();
        setSpell(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [urlToFetch]);

  // spell이 로드되기 전에 렌더링하지 않도록 체크
  if (!spell) {
    return <div>Loading...</div>;
  }

  // spell이 로드된 후에 렌더링
  return <div>{spell.map((item, index) =>{
    <div key={index}>{item.id}</div>
  })}</div>;
};

export default Spell;
