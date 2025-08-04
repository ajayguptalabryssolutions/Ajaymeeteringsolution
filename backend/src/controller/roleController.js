const roleService = require("../service/roleService");

const getAllRolesByVarified = async (req, res) => {
  try {
    const roles = await roleService.getAssignableRoles(req.userID); 

    console.log("roles is : ", roles)
    res.status(200).json({ roles });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("invalid user roles", error)
  }
};

const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Role name is required' });
    }

    const role = await roleService.createRole({ name, description });
    res.status(201).json({ message: 'Role created successfully', role });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("error creating role", err)
  }
}

const getAllRoles = async (req, res)=>{
        try{
            const roles = await roleService.getAllRoles();

           return res.status(201).json({data : roles , message:'fetched all roles'})

        }

        catch(error){
            console.log("")
        }
}

module.exports = { getAllRoles, createRole };
