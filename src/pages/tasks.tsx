import {GetServerSideProps, InferGetStaticPropsType} from "next";
import {Task} from "../domain/modeles/Task";
import {PrismaTaskRepository} from "../infrastructure/TaskRepository/PrismaTaskRepository";
import {findTasks} from "../domain/usecases/find-tasks";

interface TasksPageProps {
    props: {
        tasks: Task[]
    }
}

export const getServerSideProps: GetServerSideProps = async (): Promise<TasksPageProps> => {
    const tasks = await findTasks(PrismaTaskRepository)
    return { props: { tasks } };
}

const Tasks:React.FC = ({ tasks }: InferGetStaticPropsType<typeof getServerSideProps>) => {
    return (
        <>
            <h1>Welcome to the greatest to do list in the world!</h1>
            <ul>
                { tasks.map((todo, index) => (
                        <li key={index.toString()}>{todo.title}</li>
                    ))
                }
            </ul>
        </>
    );
};

export default Tasks;
