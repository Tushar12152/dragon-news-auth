import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const [showPassword,setShowPassword]=useState(true)
 const navigate=useNavigate()
 const location=useLocation()


   const handleLogin=e=>{
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const email=form.get('email')
    const password=form.get('password')
    console.log(email,password)
       signIn(email,password)
       .then(result=>{
        console.log(result.user);
          navigate(location?.state?location.state:'/')
      
        
       })
       .catch(error=>{
        console.log(error)
       })

   }


    return (

        
        <div>
       <Navbar></Navbar>

              <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login your account</h1>
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
    
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
         <input type={showPassword?"password":"text"} name="password" placeholder="enter your password" className="input input-bordered w-full" required />

              <span className="absolute top-4 right-1" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}</span>
         </div>
        
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#403F3F] text-white">Login</button>
        </div>
       </form>
   
       <p className="text-center p-5">Dont’t Have An Account ? <Link className="text-red-600" to='/register'>Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;