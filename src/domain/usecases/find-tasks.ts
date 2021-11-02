import {Task} from "../modeles/Task";
import {TaskRepository} from "../../infrastructure/TaskRepository/TaskRepository";

const findTasks = async (taskRepository: TaskRepository): Promise<Task[]> => {
    return await taskRepository.findAllTasks()
}

export {
    findTasks
}
