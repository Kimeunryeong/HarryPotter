import React, { useEffect, useState } from "react";
import CharaBg from "../assets/hp3.jpg";

const urlToFetch = "https://harry-potter-api-en.onrender.com/db";

export default function MainPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // 예상되는 데이터 위치에 따라 수정
        const charactersArray = data.characters || [];

        setCharacters(charactersArray);
        console.log(characters); // 확인용 로그
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className=" w-full">
        {/* 타이틀 이미지 */}
        <div className="">
          <img
            className="mx-auto w-[25%] m-10"
            src="https://i.namu.wiki/i/jCLGnjDnwyUt3yFxdoUQm3eI1kEdOS65vQHMq7z2m4cAmCY_5f8TcOV_B9ti2H6rUs3KYXQ35TRxns2N2PQI0w.webp"
          ></img>
        </div>

        {/* nav */}
        <div className="flex justify-center items-center m-16">
          <ul className="flex gap-12">
            <li>
              <a href="#">캐릭터</a>
            </li>
            <li>
              <a href="#">스펠</a>
            </li>
            <li>
              <a href="#">책</a>
            </li>
          </ul>
        </div>

        {/* 캐릭터 */}
        <div className="flex items-center justify-center">
          {characters.slice(0, 5).map((character) => (
            <div className="" key={character.id}>
              {/* 이미지 */}
              <img
                src={character.image}
                alt={character.character}
                className="w-[200px] h-[255px] "
              />
            </div>
          ))}
        </div>
        <section className="w-full h-40">
          <div className="">
            <img src={CharaBg}></img>
          </div>
        </section>

        <section>스펠 이미지</section>
        <section>책 이미지</section>
      </div>
    </>
  );
}
