import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import AuthContext from "../../Context/authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification, updateProfile } from "firebase/auth";
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [registerError, setRegisterError]=useState('');
  const [success, setSuccess]=useState('');
  const [showPassword,setShowPassword]=useState(false);


  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const accepted=form.get('terms');
    console.log(name, photo, email, password,accepted);
    // Reset Error and success
    setRegisterError('');
    setSuccess('');

    // check password auth
    if(password.length<6){
     setRegisterError('Password should be at least 6 characters or longer');
     return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegisterError('Password should be at least one uppercase');
      return;
    }
    else if(!accepted){
      setRegisterError('Please accept our terms and conditions');
      return;
    }
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess('User created successfully');

        //  Update Profile
        updateProfile(result.user,{
          displayName: name,
          photoURL: photo
        })
        .then(()=>{
          console.log('Profile updated');
      })
        .catch(error=>{
          console.error(error);
        })

        //  send verification email
        sendEmailVerification(result.user)
        .then(()=>{
          alert('please check your email and verify your account');
        })
        .catch(error=>{
          console.error(error);
        })

      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="bg-[#F3F3F3] pb-9">
      <Navbar></Navbar>
      <div className="">
      <div className="mt-6 pt-6 bg-white md:w-3/4 lg:w-1/2 mx-auto">
          <h2 className="text-3xl font-semibold text-center ">Register your account</h2>
          <hr className="border w-4/5 mt-9 mx-auto" />
       </div>

        <form
          onSubmit={handleRegister}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto bg-white "
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered bg-[#F3F3F3] border-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered bg-[#F3F3F3] border-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
            
          </div>
          <div>
            <input className="mr-2 mt-4" type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept Terms and Conditions</label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Register</button>
          </div>
          {
            registerError && <p className="text-red-600 text-center mt-2">Message: {registerError}</p>
          }
          {
            success && <p className="text-green-700 text-center mt-2">{success}</p>
          }
        </form>
        <p className="text-center bg-white md:w-3/4 lg:w-1/2 mx-auto pb-4">
          Already have an account  
           <Link className="text-red-600 font-bold ml-2" to="/login">
               Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
