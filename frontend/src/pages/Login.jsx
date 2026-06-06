import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0b1120] flex items-center justify-center overflow-hidden relative px-4 py-6">

      {/* Background Blur */}
      <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-purple-700/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-pink-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl min-h-[85vh] rounded-[28px] overflow-hidden grid lg:grid-cols-2 bg-[#111827]/80 backdrop-blur-xl border border-white/10 shadow-2xl">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-500 p-10 relative overflow-hidden">

          <div>
            {/* Logo */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                📝
              </div>

              <h1 className="text-4xl font-black text-white">
                Notes App
              </h1>
            </div>

            {/* Heading */}
            <h2 className="text-[48px] leading-[58px] font-black text-white">
              Your Ideas.
              <br />
              Organized
              <br />
              Perfectly.
            </h2>

            {/* Paragraph */}
            <p className="mt-8 text-[18px] leading-8 text-purple-100 max-w-md">
              A beautiful place to save notes, tasks and important thoughts.
            </p>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="bg-white/10 border border-white/20 rounded-3xl p-5 backdrop-blur-lg">
              <h3 className="text-4xl font-black text-white">
                10K+
              </h3>

              <p className="text-purple-100 mt-2">
                Users
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl p-5 backdrop-blur-lg">
              <h3 className="text-4xl font-black text-white">
                24/7
              </h3>

              <p className="text-purple-100 mt-2">
                Access
              </p>
            </div>
          </div>

          {/* Circle */}
          <div className="absolute w-60 h-60 bg-white/10 rounded-full -bottom-16 -right-16"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-6 sm:px-10 py-10 bg-[#111827]/95">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl">
                📝
              </div>

              <h1 className="text-3xl font-black text-white">
                Notes App
              </h1>
            </div>

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-3">
                Login Account
              </h2>

              <p className="text-gray-400 text-sm sm:text-lg">
                Continue managing your notes securely.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">

              {/* Email */}
              <div>
                <label className="block mb-3 text-sm sm:text-base font-semibold text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-3 text-sm sm:text-base font-semibold text-gray-300">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-lg font-bold shadow-[0_10px_30px_rgba(168,85,247,0.5)] hover:scale-[1.02] transition-all duration-300"
              >
                Sign In
              </button>
            </form>

            {/* Bottom Text */}
            <p className="text-center text-gray-400 mt-8 text-sm sm:text-base">
              Don’t have an account?

              <span className="text-purple-400 ml-2 font-semibold cursor-pointer hover:text-pink-400">
               <Link to="/register"> Create Account </Link>
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;