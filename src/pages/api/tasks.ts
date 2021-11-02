import {PrismaTaskRepository} from "../../infrastructure/TaskRepository/PrismaTaskRepository";
import {findTasks} from "../../domain/usecases/find-tasks";
import {NextApiRequest, NextApiResponse} from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const tasks = await findTasks(PrismaTaskRepository)
  res.status(200).json(tasks)
}
