const modulesService = require('../services/modulesService');

const getAllModules = async (req, res) => {
    try {
        const modules = await modulesService.getAllModules();
        return res.status(200).json(modules);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getModuleById = async (req, res) => {
    try {
        const module = await modulesService.getModuleById(req.params.id);
        return res.status(200).json(module);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createModule = async (req, res) => {
    try {
        const newModule = await modulesService.createModule(req.body);
        return res.status(201).json(newModule);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateModule = async (req, res) => {
    try {
        const updatedModule = await modulesService.updateModule(req.params.id, req.body);
        return res.status(200).json(updatedModule);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteModule = async (req, res) => {
    try {
        await modulesService.deleteModule(req.params.id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createModuleWithPermission = async (req, res) => {
    try {
        const { module, permission } = req.body;
        const newModule = await modulesService.createOrUpdateModuleWithPermissions(module, permission);
        return res.status(201).json({ message: 'Created with permissions', module: newModule });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllModules,
    getModuleById,
    createModule,
    updateModule,
    deleteModule,
    createModuleWithPermission
};
