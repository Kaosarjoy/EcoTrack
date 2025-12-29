import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Bounce, toast, ToastContainer } from 'react-toastify';


const Login = () => {
  const { signInUser,signInWithGoogle}=useContext(AuthContext)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword=()=>{
    setShowPassword(!showPassword);

  }
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  //  console.log(email, password);
     signInUser(email,password)
    .then(()=>{
      toast.success('Login Successful', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      }); 
      navigate('/')
      
      
    })
    .catch(error=>{
         toast.error(`Login Failed: ${error.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false, 
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });

      console.error("Login Error:", error.message)
    });
  }
  const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log("Google Sign-in Successful:", user);
                navigate('/home'); 
            })
            .catch(error => {
                console.error("Google Sign-in Error:", error.message);
            });
    };
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Enter Your Email" />
           <label className="label">Password</label>
              <div className="relative">
                <input
                  name='password'
                  type={showPassword ? "text" : "password"}
                  className="input pr-10"
                  placeholder="Set a Password"
                />
                <span
                  onClick={togglePassword}
                  className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-primary mt-4">Login</button>
          <p>
             Don't Have An Account?{" "}
             <NavLink to='/auth/register' className='text-blue-500'>
             Register</NavLink></p>
        </form>
        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      <ToastContainer></ToastContainer>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;