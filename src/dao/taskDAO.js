const Task = require("../model/task")

async function create(task){
  console.log("Salvando tarefa ["+task.title+" , "+task.dateTask+"].");
  const taskCreated = await Task.create(task)
  console.log("Tarefa ["+taskCreated.id+"] salva ["+taskCreated.title+" , "+taskCreated.dateTask+"].");
  return taskCreated;
}

function findAll(){
  console.log("Procurando todas as tarefas.");
  const tasks = await Task.findAll();
  return tasks;
}

async function find(id){
  console.log("Procurando tarefa ["+id+"].");
  const task = await Task.findByPk(id)
  console.log("Tarefa ["+task.id+"] encontrada ["+task.title+" , "+task.dateTask+"].");
  return task;
}

function update(){}

async function remove(id){
  console.log("Removendo tarefa ["+id+"].");
  const result = await Task.destroy({
    where: {id: id} 
  });
  const isTaskDeleted = result == 1 ? true : false;
  if(isTaskDeleted)
    console.log("Tarefa ["+id+"] deletada.");
  return isTaskDeleted;
}

module.exports = {
    create,
    findAll,
    find,
    update,
    remove
  };