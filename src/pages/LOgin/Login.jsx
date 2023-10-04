import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    return (

        
        <div>
       <Navbar></Navbar>

              <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login your account</h1>
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
    
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
          <input type="password" name="password" placeholder="enter your password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#403F3F] text-white">Login</button>
        </div>
       </form>
   
       <p className="text-center p-5">Dont’t Have An Account ? <Link className="text-red-600" to='register'>Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;