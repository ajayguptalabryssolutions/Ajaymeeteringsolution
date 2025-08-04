const Permission = require('../models/Permission');
const Module = require('../models/Module');
const User = require('../models/User');

const getAllPermissions = async () => {
    return await Permission.find()
        .populate('module_id')
        .populate('user_id')
        .lean();
};

const getPermissionById = async (id) => {
    return await Permission.findById(id)
        .populate('module_id')
        .populate('user_id')
        .lean();
};

const createPermission = async (data) => {
    return await Permission.create(data);
};

const updatePermission = async (id, data) => {
    return await Permission.findByIdAndUpdate(id, data, { new: true });
};

const deletePermission = async (id) => {
    return await Permission.findByIdAndDelete(id);
};

const upsertPermissionsBulk = async (permissionsArray, userId) => {
    const results = [];

    for (const permission of permissionsArray) {
        const existing = await Permission.findOne({
            user_id: permission.user_id,
            module_id: permission.module_id
        });

        if (existing) {
            const updated = await Permission.findByIdAndUpdate(existing._id, {
                ...permission,
                updated_at: new Date()
            }, { new: true });
            results.push({ status: 'updated', data: updated });
        } else {
            const created = await Permission.create({
                ...permission,
                created_by: userId,
                created_at: new Date()
            });
            results.push({ status: 'created', data: created });
        }
    }

    return results;
};

const getModulesWithPermissionsByUser = async (userId) => {
    const permissions = await Permission.find({ user_id: userId })
        .populate({
            path: 'module_id',
            match: { status: true }
        })
        .lean();

    const moduleMap = {};
    permissions.forEach(p => {
        const mod = p.module_id;
        if (!mod) return;

        moduleMap[mod._id] = {
            module_id: mod._id,
            title: mod.title,
            path: mod.path,
            is_sidebar: mod.is_sidebar,
            parent_id: mod.parent_id,
            permissions: {
                read: p.read,
                create: p.create,
                update: p.update,
                delete: p.delete
            },
            children: []
        };
    });

    const rootModules = [];
    Object.values(moduleMap).forEach(mod => {
        if (mod.parent_id && moduleMap[mod.parent_id]) {
            moduleMap[mod.parent_id].children.push(mod);
        } else {
            rootModules.push(mod);
        }
    });

    return rootModules;
};

module.exports = {
    getAllPermissions,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
    upsertPermissionsBulk,
    getModulesWithPermissionsByUser
};
