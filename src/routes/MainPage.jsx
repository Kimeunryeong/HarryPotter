import CharaBg from "../assets/hp3.jpg";
import Spell from "../assets/hp1.png";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      {/* 헤더 */}
      <section className=" w-full mb-24">
        {/* 타이틀 이미지 */}
        <div className="">
          <img
            className="mx-auto w-[25%] m-10"
            src="https://i.namu.wiki/i/jCLGnjDnwyUt3yFxdoUQm3eI1kEdOS65vQHMq7z2m4cAmCY_5f8TcOV_B9ti2H6rUs3KYXQ35TRxns2N2PQI0w.webp"
            alt="title img"
          ></img>
        </div>

        {/* nav */}
        <div className="w-full flex justify-center items-center my-16">
          <ul className="flex gap-12 text-xl">
            <li>
              <Link to="character">Character</Link>
            </li>
            <li>
              <Link to="spell">Spell</Link>
            </li>
            <li>
              <Link to="book">book</Link>
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
        <div className=" w-3/4 flex justify-center m-auto ">
          {/* 링크 사용하기(캐릭터페이지) */}
          <Link to="character" className="w-full flex justify-center m-auto">
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
          <Link to="spell">
            <img
              className="w-full object-cover"
              src={Spell}
              alt="spell_intro_img"
            />
          </Link>
        </div>
      </section>

      <section>책 이미지</section>
    </>
  );
}
