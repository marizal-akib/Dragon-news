import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
   const {signIn} =useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();
   console.log('location in login', location);


    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password);
        signIn(email, password)
        .then(res=>{
            console.log(res.user);


            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error);
        })
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="card-body">
        <h2 className=" text-2xl my-10 text-center">Login</h2>

        <form onSubmit={handleLogin} className=" md:w-3 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">Do not have an account? Please <Link  className="text-blue-500 hover:text-blue-700 hover:underline" to='/register'>Register</Link>.</p>
      </div>
    </div>
  );
};

export default Login;
