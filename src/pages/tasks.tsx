import {GetServerSideProps, InferGetStaticPropsType} from "next";
import {Task} from "../domain/modeles/Task";
import {PrismaTaskRepository} from "../infrastructure/TaskRepository/PrismaTaskRepository";
import {findTasks} from "../domain/usecases/find-tasks";
import {useState} from "react";
import axios, {AxiosInstance} from "axios";
import {FoundTaskJson} from "./api/tasks";

interface TasksPageProps {
    props: {
        tasks: FoundTaskJson[]
    }
}

export const getServerSideProps: GetServerSideProps = async (): Promise<TasksPageProps> => {
    const tasks = await findTasks(PrismaTaskRepository)
    return { props: { tasks } };
}

const addTask = (title: string): Promise<any> => {
    return axios.post('/api/tasks', {
        title: title
    })
}

const Tasks:React.FC = ({ tasks }: InferGetStaticPropsType<typeof getServerSideProps>) => {
    const [addedTasks, setAddedTasks] = useState<Partial<Task>[]>([])
    const [currentTask, setCurrentTask] = useState<string>('')

    const [successMessage, setSuccessMessage] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const addTodo = () => {
        setAddedTasks([...addedTasks, {title: currentTask, done: false}])
        addTask(currentTask)
        .then((result) => {
            setSuccessMessage(result.data.message)
            setErrorMessage('')
        }).catch((error) => {
            setSuccessMessage('')
            setErrorMessage(error.message)
        })
    }

    function onChangeCurrentTask(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentTask(event.target.value)
    }

    return (
        <>
            <h1>Bienvenue dans la plus grande TodoList du monde !</h1>
            <ul>
                { tasks.map((task, index) => (
                        <li key={index.toString()}>{task.title}</li>
                    ))
                }
                { addedTasks.map((addedTask, index) => (
                        <li key={(index + tasks.length).toString()}>{addedTask.title}</li>
                    ))
                }
            </ul>
            <label>Nom de la tâche à ajouter : </label>
            <input aria-describedby={(successMessage || errorMessage) && 'status-message' } name="taskToAdd" value={currentTask} onChange={onChangeCurrentTask} />
            <button onClick={addTodo}>Ajouter</button>
            {successMessage && <span id='status-message' role='status'>{ successMessage }</span>}
            {errorMessage && <span id='status-message' role='alert'>{ errorMessage }</span>}
        </>
    );
};

export default Tasks;
