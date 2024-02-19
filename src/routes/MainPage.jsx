import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";


const urlToFetch = "https://harry-potter-api-en.onrender.com/db";

export default function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const charactersData = data.characters || [];
        const spellsData = data.spells || [];
        const booksData = data.books || [];

        setData({
          characters: charactersData,
          spells: spellsData,
          books: booksData,
        });
        console.log(data.characters);
        // console.log(data.spells);
      })
      .catch((e) => console.log(e));
  }, []); // 빈 배열로 설정

  return (
    <>
      {/* 헤더 */}
      <div className="w-full h-[100px]">
        {/* 로고 */}
        <div className="w-[1500px] h-full bg-red-500 flex justify-center justify-between items-center m-auto mt-4">
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
            <Link to="books">
              <p>BOOKS</p>
            </Link>
            <p>MOVIES</p>
          </div>
        </div>
      </div>

      {/* 캐릭터 */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
  );
}
