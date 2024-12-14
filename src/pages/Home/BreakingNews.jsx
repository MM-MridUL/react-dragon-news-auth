import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] py-2">
      <button className="btn rounded-none text-white bg-[#D72050] ml-2">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">
        Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet............
      </Link>
        <Link className="mr-12" to="/">
        Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine............
      </Link>
        <Link className="mr-12" to="/">
        Joe Biden announces $3 billion in Ukraine weapons aid............
      </Link>
        <Link className="mr-12" to="/">
        America Imported Over $6 Billion in Goods From Russia Since Ukraine Invasion............
      </Link>
       
      </Marquee>
    </div>
  );
};

export default BreakingNews;
