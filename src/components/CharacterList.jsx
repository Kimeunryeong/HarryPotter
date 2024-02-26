import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const urlToFetch = "https://harry-potter-api-en.onrender.com/db";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const charactersArray = data.characters || [];
        setCharacters(charactersArray);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {characters.map((character) => (
          <SwiperSlide key={character.id}>
            <img
              src={character.image}
              alt={character.character}
              className="w-[300px] h-[350px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
