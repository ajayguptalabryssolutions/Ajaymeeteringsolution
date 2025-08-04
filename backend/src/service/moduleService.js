const Module = require("../models/Module");
const Permission = require("../models/Permission");

const getAllModules = async () => {
  const modules = await Module.find({ status: true })
    .populate("parent_id")
    .sort({ _id: 1 })
    .lean();

  const moduleMap = {};
  modules.forEach((mod) => {
    moduleMap[mod._id] = { ...mod, children: [] };
  });

  const rootModules = [];
  modules.forEach((mod) => {
    if (mod.parent_id) {
      if (moduleMap[mod.parent_id?._id]) {
        moduleMap[mod.parent_id._id].children.push(moduleMap[mod._id]);
      } else {
        rootModules.push(moduleMap[mod._id]);
      }
    } else {
      rootModules.push(moduleMap[mod._id]);
    }
  });

  return rootModules;
};

const getModuleById = async (id) => {
  return await Module.findById(id).lean();
};

const createModule = async (data) => {
  return await Module.create(data);
};

const updateModule = async (id, data) => {
  return await Module.findByIdAndUpdate(id, data, { new: true });
};

const deleteModule = async (id) => {
  return await Module.findByIdAndDelete(id);
};

const createOrUpdateModuleWithPermissions = async (
  moduleData,
  permissionData
) => {
  const newModule = await Module.create(moduleData);

  const permission = await Permission.findOne({
    user_id: permissionData.user_id,
    module_id: newModule._id,
  });

  if (permission) {
    await Permission.findByIdAndUpdate(permission._id, {
      ...permissionData,
      module_id: newModule._id,
      updated_at: new Date(),
    });
  } else {
    await Permission.create({
      ...permissionData,
      module_id: newModule._id,
      created_at: new Date(),
    });
  }

  return newModule;
};

module.exports = {
  getAllModules,
  getModuleById,
  createModule,
  updateModule,
  deleteModule,
  createOrUpdateModuleWithPermissions,
};
