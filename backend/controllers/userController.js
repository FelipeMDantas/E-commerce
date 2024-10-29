import userModel from "../models/userModel.js";

const loginUser = async (req, res) => {};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });
  } catch (error) {}
};

const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
