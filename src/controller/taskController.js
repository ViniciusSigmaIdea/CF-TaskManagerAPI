const dao = require("../dao/taskDAO")

async function create(req, res, next){
    try {
        const task = {
            title: req.body.title,
            dateTask: req.body.dateTask,
            obs: req.body.obs
        };
        if (!task.title || !task.dateTask || !task.obs) throw new ReferenceError('Informações para cadastro da tarefa estão incompletas');
        const { id } = await dao.create(task);
        res.json({
            status: 200,
            message: process.env.ENV = "DEV" ? `Tarefa [${id}] foi salva com sucesso.`: `Tarefa foi salva com sucesso.`,
        });
    } catch (error) {
        if (error instanceof ReferenceError) res.status(404);
        next(error);
    }
}

async function findAll(req, res, next){
    try {
        const tasks = await dao.findAll();
        res.send(tasks);
    } catch (error) {
        if (error instanceof ReferenceError) res.status(404);
        next(error);
    }
}

async function find(req, res, next){
    try {
        const { id } = req.params;
        if (!validateId(id)) throw new ReferenceError('ID requisitado não encontrado.');
        const task = await dao.find(id);
        res.send(task);
    } catch (error) {
        if (error instanceof ReferenceError) res.status(404);
        next(error);
    }
}

async function update(req, res, next){
    try {
        const task = {
            id: req.params.id,
            title: req.body.title,
            dateTask: req.body.dateTask,
            obs: req.body.obs
        };
        if (!validateId(task.id)) throw new ReferenceError('ID requisitado não encontrado.');
        const isUpdated = await dao.update(task);
        if (!isUpdated) throw new ReferenceError('ID requisitado não encontrado.');
        res.json({
            status: 200,
            message: process.env.ENV = "DEV" ? `Tarefa [${task.id}] foi atualizada com sucesso.`: `Tarefa foi atualizada com sucesso.`,
        });
    } catch (error) {
        if (error instanceof ReferenceError) res.status(404);
        next(error);
    }
}

async function remove(req, res, next){
    try {
        const { id } = req.params;
        if (!validateId(id)) throw new ReferenceError('ID requisitado não encontrado.');
        const isDeleted = await dao.remove(id);
        if (!isDeleted) throw new ReferenceError('ID requisitado não encontrado.');
        res.json({
            status: 200,
            message: process.env.ENV = "DEV" ? `Tarefa [${id}] foi excluída com sucesso.`: `Tarefa foi excluída com sucesso.`,
        });
    } catch (error) {
        if (error instanceof ReferenceError) res.status(404);
        next(error);
    }
}

function validateId(id){
    if(!/^[0-9]*$/.test(id))
        return false;
    return true;
}

module.exports = {
    create,
    findAll,
    find,
    update,
    remove
};