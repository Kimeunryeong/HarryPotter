import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Layout({ children }) {
  return (
    <>
      {/* 헤더 */}
      <header className="w-full h-[100px] mb-48">
        {/* 로고 */}
        <div className="w-[1500px] h-full flex justify-center justify-between items-center m-auto mt-4">
          <div className="h-full p-2 mt-2">
            <Link to={"/"}>
              <img src={Logo} alt="harry logo" className="h-full " />
            </Link>
          </div>

          {/* 메뉴 */}
          <div className="flex space-x-10">
            <Link to="/characters">
              <p>CHARACTERS</p>
            </Link>
            <Link to="/spells">
              <p>SPELLS</p>
            </Link>
            <Link to="/books">
              <p>BOOKS</p>
            </Link>
          </div>
        </div>
      </header>

      {/* 페이지 콘텐츠 */}
      <div className="w-full m-auto">{children}</div>
      {/* 푸터 */}
      {/* 푸터 */}
      <footer>
        <div className="w-[1600px] m-auto my-14 border-t-2 border-white text-center">
          <p className="m-10">©2024.HarryPotter forever</p>
        </div>
      </footer>
    </>
  );
}
