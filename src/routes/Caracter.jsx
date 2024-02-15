import React, { useEffect, useState } from "react";

const urlToFetch = "https://harry-potter-api-en.onrender.com/db";

export default function Caracter() {
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
    <div className="flex flex-col justify-center items-center w-full">
      {characters.map((character) => (
        <div className="flex items-center justify-center w-[800px] " key={character.id}>
          {/* 이미지 */}
          <div className="m-4">
            <img
              src={character.image}
              alt={character.character}
              className="w-[200px] h-[255px] "
            />
          </div>
          {/* 텍스트 */}
          <div className="">
            <p>Name: {character.character}</p>
            <p>Nickname: {character.nickname}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
