// const jwt = require('jsonwebtoken');

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   console.log(authHeader);
//   const token = authHeader?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Access denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(403).json({ message: 'Invalid or expired token' });
//   }
// };

// module.exports = {authenticateToken};


const jwt = require("jsonwebtoken");
const User = require("../model/User");
require("dotenv").config();

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Bearer token is missing" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userID = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    console.error("Token Verification Error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

const roleBasedAuth = (permittedRoles) => {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;
   
    console.log("auth header is :", authHeader)
    if (!authHeader) {
      return res.status(401).send("Authorization header is missing");
    }

    const token = authHeader.split(" ")[1];

    console.log("token is : ", token)
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log("decoded is  :", decoded)
      const user = await User.findById(decoded.id);

      if (!user) return res.status(404).send("User not found");

      if (permittedRoles.includes(user.role)) {
        req.userID = user._id;
        req.userRole = user.role;
        req.user = user; // optionally pass full user
        next();
      } else {
        return res.status(403).send("You are not authorized for this route");
      }
    } catch (error) {
      console.error("RoleBasedAuth Error:", error);
      return res.status(401).send("Invalid token");
    }
  };
};

module.exports = { authenticateToken, roleBasedAuth };



// const jwt = require("jsonwebtoken");
// const { userModel } = require("../model/User");
// require("dotenv").config();

// const roleBasedAuth = (permittedRoles) => async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).send("Authorization header is missing");
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

//     if (!decoded) {
//       return res.status(401).send("Token not verified");
//     }

//     const user = await userModel.findById(decoded.id);

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     if (permittedRoles.includes(user.role)) {
//     //   req.user = user; // pass user to next middleware if needed
//      req.userID = decoded.id;        
//     req.userRole = decoded.role;    
//       next();
//     } else {
//       return res.status(403).send("You are not authorized for this route");
//     }
//   } catch (error) {
//     console.error("RoleBase Middleware Error:", error);
//     return res.status(401).send("Invalid token");
//   }
// };



// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (authHeader) {
//     const token = authHeader.split(" ")[1];

//     try {
//       const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); 

//       if (decoded) {
//         req.userID = decoded.id;        
//         req.userRole = decoded.role;    

//         next();
//       } else {
//         res.status(400).json({
//           status: 400,
//           success: false,
//           message: "Please login first",
//         });
//       }
//     } catch (error) {
//       console.error("Token Verification Error:", error);
//       res.status(401).json({
//         status: 401,
//         success: false,
//         message: "Invalid or expired token",
//       });
//     }
//   } else {
//     res.status(401).json({
//       status: 401,
//       success: false,
//       message: "Bearer token is missing or invalid",
//     });
//   }
// };

// module.exports = {
//   authenticateToken,roleBasedAuth
// };