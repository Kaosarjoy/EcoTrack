import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

 const handleRegister = async (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const photo = form.photo.value;
  const password = form.password.value;

  try {
    const result = await createUser(email, password);

    await updateProfile(result.user, {
      displayName: name,
      photoURL: photo,
    });

    navigate("/");
  } catch (error) {
    console.error("Registration Error:", error.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full border p-2 rounded-lg" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full border p-2 rounded-lg" required />
          <input type="text" name="photo" placeholder="Photo URL" className="w-full border p-2 rounded-lg" />
          <input type="password" name="password" placeholder="Password" className="w-full border p-2 rounded-lg" required />
          <button type="submit" className="btn bg-base-200 text-secondary hover:bg-base-100 w-full">Register</button>
          <p>Already have an account? <NavLink to='/auth/login' className='text-blue-500 underline'>Login</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
