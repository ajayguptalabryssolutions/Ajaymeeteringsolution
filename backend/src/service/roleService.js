// const User = require("../model/User");

// const getAllRoles = async (userId) => {
//   const user = await User.findById(userId);
//   if (!user) throw new Error("User not found");

//   const currentUserRole = user.role;

//   // Inline role hierarchy
//   const roleHierarchy = ["SuperAdmin","SuperAdminUser", "Admin", "User"];

//   const index = roleHierarchy.indexOf(currentUserRole);
//   if (index === -1) throw new Error("Invalid user role");

//   const assignableRoles = currentUserRole === "SuperAdmin"
//     ? roleHierarchy
//     : roleHierarchy.slice(index + 1);

//   return assignableRoles;
// };

// module.exports = {
//   getAllRoles,
// };


const User = require("../model/User");
const Role = require("../model/Role");

const getAssignableRoles = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  const roleHierarchy = ["superAdmin", "admin", "user"];
  const currentUserRole = user.role;
  console.log("current user roel is ------------- : ", currentUserRole)
  const currentRoleIndex = roleHierarchy.indexOf(user.role);
  console.log("role is", currentRoleIndex )

  if (currentRoleIndex === -1) throw new Error("Invalid user role");

  if (user.role === "superAdmin") {
    return roleHierarchy;
  } else {
    return roleHierarchy.slice(currentRoleIndex + 1);
  }
};


const createRole = async ({ name, description }) => {

  const existingRole = await Role.findOne({ name });

  if (existingRole) {
    throw new Error("Role already exists");
  }

  const newRole = await Role.create({ name, description });
  return newRole;
};

const getAllRoles = async ()=>{
    const roles = await Role.find()

    if(!roles){
        console.get("roles is not available")
    }
    return roles;
}

module.exports = { getAssignableRoles, createRole, getAllRoles };
