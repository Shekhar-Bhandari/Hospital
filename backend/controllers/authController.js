const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../models/UserModel");

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password,role } = req.body;
  
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const user = new User({
      name,
      email,
      password: hashedPassword
      
      
    });

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    // const token = jwt.sign(
    //   payload,
    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: 36000
    //   },
    //   // (err, token) => {
    //   //   if (err) throw err;
    //   //   res.json({ token });
    //   // }
    // );
   res.json({message:"User Regisetered successfully"}) 
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role   
      }
    };

    const token=jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 36000
      },
    
    );
    return res.json({token:token,userId:user.id,role:user.role});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

