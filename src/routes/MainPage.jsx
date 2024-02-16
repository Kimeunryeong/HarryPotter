import React, { useEffect, useState } from "react";
import CharaBg from "../assets/hp3.jpg";
import Spell from "../assets/hp1.png";
import { Link } from "react-router-dom";

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
      {/* 헤더 */}
      <section className=" w-full mb-24">
        {/* 타이틀 이미지 */}
        <div className="">
          <img
            className="mx-auto w-[25%] m-10"
            src="https://i.namu.wiki/i/jCLGnjDnwyUt3yFxdoUQm3eI1kEdOS65vQHMq7z2m4cAmCY_5f8TcOV_B9ti2H6rUs3KYXQ35TRxns2N2PQI0w.webp"
          ></img>
        </div>

        {/* nav */}
        <div className="w-full flex justify-center items-center my-16">
          <ul className="flex gap-12 text-xl">
            <li>
              <a href="#">Character</a>
            </li>
            <li>
              <a href="#">Spell</a>
            </li>
            <li>
              <a href="#">book</a>
            </li>
          </ul>
        </div>
      </section>

      {/* 캐릭터 섹션 */}
      <section className="w-full h-96 flex flex-col justify-center items-center my-40">
        {/* 서브 타이틀 */}
        <div className="w-3/4 m-8">
          <p className=" text-4xl">Character</p>
        </div>
        <div className=" w-3/4 h-full flex justify-center m-auto">
          {/* 링크 사용하기(캐릭터페이지) */}
          <Link to="/Character" className="flex justify-center m-auto">
            <img
              className="w-full object-cover"
              src={CharaBg}
              alt="Character_intro_img"
            />
          </Link>
        </div>
      </section>

      {/* 스펠 섹션 */}
      <section className="w-full h-96 flex flex-col justify-center items-center">
        <div className="w-3/4 m-8">
          <p className=" text-4xl">Spell</p>
        </div>
        <div className=" w-3/4 h-full flex justify-center m-auto">
          {/* 링크 사용하기(스펠 페이지) */}
          <a href="#">
            <img
              className="w-full object-cover"
              src={Spell}
              alt="spell_intro_img"
            />
          </a>
        </div>
      </section>

      <section>책 이미지</section>
    </>
  );
}
