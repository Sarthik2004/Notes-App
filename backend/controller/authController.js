import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const newuser = await User.create({
      name,
      email,
      password: hashedpassword,
    });
    res.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }
    const Match = await bcrypt.compare(password, user.password);

    if (!Match) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign({ id: user._id }, "secret key", {
      expiresIn: "1d",
    });
    res.status(200).json({
      message: "login successfully",
      token,
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
