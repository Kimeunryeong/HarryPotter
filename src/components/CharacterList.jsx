import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const urlToFetch = "https://harry-potter-api-en.onrender.com/db";
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

return <></>;
