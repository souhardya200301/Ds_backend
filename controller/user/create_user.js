const User = require("../../model/user.model");

const create_user = async (req, res) => {
  try {
    console.log(req.body);
    const { email, name, password, role } = req.body;

    /**
     *
     */
    if (!email || !name || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Assuming you have a User model imported
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({ email, name, password, role });

    let f_user = await newUser.save();

    f_user = f_user.toObject();

    delete f_user.password;

    return res
      .status(201)
      .json({ message: "User created successfully", user: f_user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = create_user;
