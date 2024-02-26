import React, { useEffect, useState } from "react";
import booksTranslation from "../locales/ko/booksTranslation.json";
import Layout from "../components/Layout";

const urlToFetch = "https://harry-potter-api-en.onrender.com/db";

export default function Book() {
  const [book, setBook] = useState([]);
  const [hoveredBook, setHoveredBook] = useState(null);

  useEffect(() => {
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const booksArray = data.books || [];
        setBook(booksArray);
      })
      .catch((e) => console.log(e));
  }, []); // 빈 배열로 설정

  function getKoreanTranslation(id, field) {
    const translationData = booksTranslation.find((item) => item.id === id);
    return translationData ? translationData[field] : "번역 없음";
  }

  return (
    <Layout>
      <div className="w-full ">
        <div className="w-[1300px] m-auto mt-16">
          <h1 className="text-4xl mb-16">BOOKS</h1>
          <div>
            {book.map((books) => (
              <div
                className="mb-40 text-2xl"
                key={books.id}
                onMouseEnter={() => setHoveredBook(books.id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <p>
                  {hoveredBook === books.id
                    ? getKoreanTranslation(books.id, "title")
                    : books.title}
                </p>
                <p>
                  {hoveredBook === books.id
                    ? getKoreanTranslation(books.id, "releaseDay")
                    : books.releaseDay}
                </p>
                <p>
                  {hoveredBook === books.id
                    ? getKoreanTranslation(books.id, "author")
                    : books.author}
                </p>
                <p>
                  {hoveredBook === books.id
                    ? getKoreanTranslation(books.id, "description")
                    : books.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
