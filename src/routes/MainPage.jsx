import { Link } from "react-router-dom";

import CharacterList from "../components/CharacterList";
import Layout from "../components/Layout";

export default function MainPage() {
  return (
    <>
      <Layout>
        {/* 캐릭터 */}

        <div className="w-[1300px] m-auto">
          <p className=" text-4xl mb-12">Characters</p>
          <CharacterList />
        </div>

        {/* 스펠 */}
        <div className="w-[1300px] m-auto my-52">
          <p className=" text-4xl mb-12">Spells</p>
          <Link to="/spells">
            <img
              className="w-full h-[300px]"
              src="https://mblogthumb-phinf.pstatic.net/MjAyMDEyMjdfMjc4/MDAxNjA5MDUyMzkxNzM0.Eyj-lRQqnRdHp_U7BT-3Nh8UB29clf9Iz92C5Xrz77Eg.amCTSo4wW6m9InRwQ7Emj2wiLgftJkxBrgkood_wlggg.GIF.jshn0107/p.gif?type=w800"
              alt="spells img"
            />
          </Link>
        </div>
        {/* 북 */}
        <div className="w-[1300px] m-auto my-52">
          <p className=" text-4xl mb-12">Books</p>
          <Link to="/books">
            <img
              className="w-full h-[450px]"
              src="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7whe/image/mLUpdJvn_HaxOyLg2do7lTxeQFI.jpg"
              alt="spells img"
            />
          </Link>
        </div>
      </Layout>
    </>
  );
}
