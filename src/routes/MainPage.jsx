import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
// import CharacterList from "../components/CharacterList";

export default function MainPage() {

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

      <div>
        {/* <CharacterList /> */}
      </div>
    </>
  );
}
