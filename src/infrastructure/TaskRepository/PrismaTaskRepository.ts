import {TaskRepository} from "./TaskRepository";
import {Task} from "../../domain/modeles/Task";
import prisma from "../lib/prisma";

export const PrismaTaskRepository: TaskRepository = {
    addTask: async (taskTitle: string): Promise<Task> => {
        return await prisma.task.create({
            data: {
                title: taskTitle,
                done: false
            }
        });
    },
    findAllTasks: async (): Promise<Task[]> => {
        return await prisma.task.findMany();
    }
}
