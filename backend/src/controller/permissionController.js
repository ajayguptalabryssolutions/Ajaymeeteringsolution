const permissionsService = require('../services/permissionsService');

const getAllPermissions = async (req, res) => {
    try {
        const permissions = await permissionsService.getAllPermissions();
        return res.status(200).json(permissions);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getPermissionById = async (req, res) => {
    try {
        const permission = await permissionsService.getPermissionById(req.params.id);
        return res.status(200).json(permission);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createPermission = async (req, res) => {
    try {
        const newPermission = await permissionsService.createPermission(req.body);
        return res.status(201).json(newPermission);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updatePermission = async (req, res) => {
    try {
        const updated = await permissionsService.updatePermission(req.params.id, req.body);
        return res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deletePermission = async (req, res) => {
    try {
        await permissionsService.deletePermission(req.params.id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const bulkUpsertPermissions = async (req, res) => {
    try {
        const result = await permissionsService.upsertPermissionsBulk(req.body.permissions, req.user.id);
        return res.status(200).json({ message: 'Updated', result });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getViewPermissionsByUser = async (req, res) => {
    try {
        const modules = await permissionsService.getModulesWithPermissionsByUser(req.user.id);
        return res.status(200).json(modules);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPermissions,
    getPermissionById,
    createPermission,
    updatePermission,
    deletePermission,
    bulkUpsertPermissions,
    getViewPermissionsByUser
};
