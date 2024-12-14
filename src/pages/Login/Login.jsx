import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../Context/authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail,getAuth } from "firebase/auth";
import app from "../../firebase/firebas.config";

const Login = () => {

  const [registerError, setRegisterError]=useState('');
  const [success, setSuccess]=useState('');
  const [showPassword,setShowPassword]=useState(false);

  const emailRef=useRef(null);

    const {signIn}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    console.log('location is the login page',location);

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        console.log(email,password);
        // Reset Error and Success
        setRegisterError('');
        setSuccess('');

        // Login User
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
           if(result.user.emailVerified){
               setSuccess('Login Successfully');

           }
           else{
            alert('please verify your email address');
           }
            // navigate
            navigate(location?.state ? location.state:'/')
        })
        .catch(error=>{
            console.error(error);
            setRegisterError(error.message)
        })
    }
    const auth = getAuth(app);
    const handleForgetPassword=()=>{
      const email=emailRef.current.value;
      if(!email){
        console.log('send reset email',emailRef.current.value)
        return;

      }
      else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        console.log('please write a valid email');
        return;

      }
      // send validation email
      
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert('please check your email');
      })
      .catch(error=>{
        console.error(error);
      })
    }

  return (
    <div className="bg-[#F3F3F3]">
      <Navbar></Navbar>
      <div className="">
       <div className="mt-6 pt-6 bg-white md:w-3/4 lg:w-1/2 mx-auto">
          <h2 className="text-3xl font-semibold text-center ">Login your account</h2>
          <hr className="border w-4/5 mt-9 mx-auto" />
       </div>


        <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-white">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              className="input input-bordered bg-[#F3F3F3] border-none"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
              type={showPassword? "text":"password"}
              name="password"
              placeholder="Password"
              className="input input-bordered bg-[#F3F3F3] border-none"
              required
            />
             <span className="absolute top-[58px] right-2" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
            <label className="label flex justify-end mt-2">
              <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-[#403F3F] text-white">Login</button>
          </div>
          {
            registerError && <p className="text-red-600 text-center mt-2">Message: {registerError}</p>
          }
         {
            success && <p className="text-green-700 text-center mt-2">{success}</p>
          }
        </form>
       
        <p className="text-center bg-white md:w-3/4 lg:w-1/2 mx-auto pb-4">Do not have an account? <Link className="text-red-600 font-bold" to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
