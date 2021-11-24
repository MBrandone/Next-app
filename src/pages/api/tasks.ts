import {PrismaTaskRepository} from "../../infrastructure/TaskRepository/PrismaTaskRepository";
import {findTasks} from "../../domain/usecases/find-tasks";
import {NextApiRequest, NextApiResponse} from "next";
import {addTask} from "../../domain/usecases/add-task";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { title } = req.body as TaskToAddJson
    await addTask(PrismaTaskRepository, title)
    res.status(201).json({message: 'La tâche a bien été ajouté'})
  } else {
    const tasks = await findTasks(PrismaTaskRepository)
    res.status(200).json(tasks)
  }
}

type TaskToAddJson = {
  title: string
}

export type FoundTaskJson = {
  id: string
  title:string
  done: boolean
}
