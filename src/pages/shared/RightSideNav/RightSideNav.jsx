import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swimming from '../../../assets/swimming.png'
import classes from '../../../assets/class.png'
import playGround from '../../../assets/playground.png'
import { useContext } from "react";
import AuthContext from "../../../Context/authContext";
const RightSideNav = () => {

  const {googleLogin,githubLogin}=useContext(AuthContext);

  const handleGoogleLogin = ()=>{
    googleLogin()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error);
    })
  }

  const handleGithubLogin=()=>{
    githubLogin()
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>{
      console.error(error);
    })
  }

  return (
    <div >
      <div className="px-4 pb-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
        <FaGoogle />
          Login With Google
        </button>
        <button onClick={handleGithubLogin} className="btn btn-outline w-full">
        <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us on</h2>
        <a className="flex p-4 text-lg items-center border rounded-t-lg hover:bg-gray-200" href="https://www.facebook.com/mahtasham.mridul">
            <FaFacebook className="mr-3"></FaFacebook>
            Facebook
        </a>
        <a className="flex p-4 text-lg items-center border-x hover:bg-gray-200" href="https://x.com/mmmridul84">
            <FaTwitter className="mr-3"></FaTwitter>
            Twitter
        </a>
        <a className="flex p-4 text-lg items-center border rounded-b-lg hover:bg-gray-200" href="https://www.instagram.com/mahtashammridul/?hl=en">
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
