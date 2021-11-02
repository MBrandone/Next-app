import {TaskRepository} from "./TaskRepository";
import {Task} from "../../domain/modeles/Task";
import prisma from "../../../lib/prisma";

export const PrismaTaskRepository: TaskRepository = {
    findAllTasks: async (): Promise<Task[]> => {
        return await prisma.task.findMany();
    }
}
