import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swimming from '../../../assets/swimming.png'
import classes from '../../../assets/class.png'
import playGround from '../../../assets/playground.png'
const RightSideNav = () => {
  return (
    <div >
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline w-full">
        <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
        <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us on</h2>
        <a className="flex p-4 text-lg items-center border rounded-t-lg" href="">
            <FaFacebook className="mr-3"></FaFacebook>
            Facebook
        </a>
        <a className="flex p-4 text-lg items-center border-x" href="">
            <FaTwitter className="mr-3"></FaTwitter>
            Twitter
        </a>
        <a className="flex p-4 text-lg items-center border rounded-b-lg" href="">
            <FaInstagram className="mr-3"></FaInstagram>
            Instagram
        </a>
      </div>
      {/* Q Zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={swimming} alt="" />
        <img src={classes} alt="" />
        <img src={playGround} alt="" />
       
      </div>
    </div>
  );
};

export default RightSideNav;
