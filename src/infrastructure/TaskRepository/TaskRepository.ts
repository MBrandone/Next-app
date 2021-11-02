import {Task} from "../../domain/modeles/Task";

export type TaskRepository = {
    findAllTasks: () => Promise<Task[]>
}
