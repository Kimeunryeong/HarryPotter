import React, { useEffect, useState } from "react";

const urlToFetch = "https://harry-potter-api-en.onrender.com/db";

export default function Character() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // 확인용 로그

        // 예상되는 데이터 위치에 따라 수정
        const charactersArray = data.characters || [];

        setCharacters(charactersArray);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="w-full">
      <div className="w-[1200px] grid grid-cols-4 m-auto items-center">
        {characters.map((character) => (
          <div key={character.id} className=" flex flex-col justify-center my-10 items-center">
            {/* 이미지 */}
            <div className=" mb-4">
              <img
                src={character.image}
                alt={character.character}
                className="w-[200px] h-[255px] "
              />
            </div>
            {/* 텍스트 */}
            <div className=" text-center">
              <p>{character.character}</p>
              <p>{character.nickname}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
