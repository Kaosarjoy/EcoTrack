import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInUser(email, password);

      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });

      navigate(from, { replace: true });
    } catch (error) {
      toast.error(`Login Failed: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(`Google Login Failed: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">Login to EcoTrack</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pr-10"
                    placeholder="Enter password"
                    required
                  />
                  <span
                    onClick={togglePassword}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <NavLink
                  to="/forgot-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot password?
                </NavLink>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              <p className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <NavLink
                  to="/auth/register"
                  className="text-blue-500 underline"
                >
                  Register
                </NavLink>
              </p>
            </form>

            <div className="divider">OR</div>

            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border w-full"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </svg>
              <span className="ml-2">Login with Google</span>
            </button>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
