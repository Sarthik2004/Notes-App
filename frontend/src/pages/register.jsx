import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/register",
        form
      );

      alert(res.data.message);

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="h-screen w-full bg-[#0b1120] flex items-center justify-center overflow-hidden relative px-4">

      {/* Background */}
      <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-3xl rounded-full -top-24 -left-24"></div>

      <div className="absolute w-[250px] h-[250px] bg-pink-500/20 blur-3xl rounded-full bottom-[-80px] right-[-80px]"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl h-[82vh] rounded-[30px] overflow-hidden grid lg:grid-cols-2 bg-[#111827]/85 backdrop-blur-2xl border border-white/10 shadow-2xl">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-500 p-10 relative overflow-hidden">

          <div>
            {/* Logo */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-white text-purple-700 flex items-center justify-center text-3xl shadow-xl">
                📒
              </div>

              <h1 className="text-4xl font-black text-white">
                Notes App
              </h1>
            </div>

            {/* Heading */}
            <h2 className="text-[50px] leading-[60px] font-black text-white">
              Create Your
              <br />
              Account Today.
            </h2>

            {/* Paragraph */}
            <p className="mt-8 text-[18px] leading-8 text-purple-100 max-w-md">
              Join now and organize your ideas beautifully with our modern notes app.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="bg-white/10 border border-white/20 rounded-3xl p-5 backdrop-blur-xl">
              <h3 className="text-4xl font-black text-white">
                10K+
              </h3>

              <p className="mt-2 text-purple-100">
                Users
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-3xl p-5 backdrop-blur-xl">
              <h3 className="text-4xl font-black text-white">
                100%
              </h3>

              <p className="mt-2 text-purple-100">
                Secure
              </p>
            </div>
          </div>

          {/* Circle */}
          <div className="absolute w-60 h-60 bg-white/10 rounded-full -bottom-16 -right-16"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center bg-[#111827]/95 px-8">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="flex lg:hidden items-center justify-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white text-purple-700 flex items-center justify-center text-2xl">
                📒
              </div>

              <h1 className="text-3xl font-black text-white">
                Notes App
              </h1>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-3">
                Create Account
              </h2>

              <p className="text-gray-400 text-sm sm:text-lg">
                Register and start managing your notes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block mb-2 text-sm sm:text-base font-semibold text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full h-12 px-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm sm:text-base font-semibold text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full h-12 px-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-sm sm:text-base font-semibold text-gray-300">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  className="w-full h-12 px-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-lg font-bold shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                Create Account
              </button>
            </form>

            {/* Bottom Text */}
            <p className="text-center text-gray-400 mt-6 text-sm sm:text-base">
              Already have an account?

              <span
                onClick={() => navigate("/login")}
                className="text-purple-400 ml-2 font-semibold cursor-pointer hover:text-pink-400"
              >
                Login
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;