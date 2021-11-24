import {Task} from "../modeles/Task";
import {TaskRepository} from "../../infrastructure/TaskRepository/TaskRepository";

const addTask = async (taskRepository: TaskRepository, taskTitle: string): Promise<Task> => {
    return await taskRepository.addTask(taskTitle)
}

export {
    addTask
}
