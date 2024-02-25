// // import React, { useRef, useState, useEffect } from "react";
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/effect-coverflow";
// // import "swiper/css/pagination";
// // import "./styles.css";

// // // import required modules
// // import { EffectCoverflow, Pagination } from "swiper/modules";

// // const urlToFetch = "https://harry-potter-api-en.onrender.com/db";
// // const [data, setData] = useState([]);

// // useEffect(() => {
// //   fetch(urlToFetch)
// //     .then((res) => res.json())
// //     .then((data) => {
// //       // console.log(data);
// //       const charactersData = data.characters || [];
// //       const spellsData = data.spells || [];
// //       const booksData = data.books || [];

// //       setData({
// //         characters: charactersData,
// //         spells: spellsData,
// //         books: booksData,
// //       });
// //       console.log(data.characters);
// //       // console.log(data.spells);
// //     })
// //     .catch((e) => console.log(e));
// // }, []); // 빈 배열로 설정

// // return <></>;

// import Swiper from 'swiper';
// import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
