import {screen} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import {render} from "@testing-library/react";
import Tasks, {getServerSideProps} from "../../pages/tasks";
import {Task} from "../../domain/modeles/Task";
import { v4 as uuidv4 } from 'uuid';
import {InferGetStaticPropsType} from "next";

const taskBuilder = (taskProps: Partial<Task>): Task => {
    return {
        title: taskProps.title || 'Un titre au hasard',
        done: taskProps.done || false,
        id: taskProps.id || uuidv4()
    }
}

describe('Todo List', () => {
    const task1: Task = taskBuilder({ title: "une première tâche", done: true})
    const task2: Task = taskBuilder({ title: "une deuxième tâche", done: false})
    const tasks = [task1, task2]
    const tasksPageComponentProps: InferGetStaticPropsType<typeof getServerSideProps> = {
        tasks
    }

    test("Quand j'arrive sur la page, la liste de tâches s'affichent", () => {
        // when
        render(<Tasks {...tasksPageComponentProps}/>)

        // then
        expect(screen.getByRole("list")).toBeDefined()
        expect(screen.queryAllByRole("listitem").length).toBe(2)

    })

    test("Quand je rentre une tâche et que je clique sur ajouter, la tâche s'affiche dans la liste", () => {
        // given
        render(<Tasks {...tasksPageComponentProps}/>)

        userEvent.type(screen.getByRole('textbox'), 'une nouvelle tâche')

        // when
        userEvent.click(screen.getByText('Ajouter'))

        // then
        expect(screen.getByText("une nouvelle tâche")).toBeDefined()
        expect(screen.queryAllByRole("listitem")).toHaveLength(tasks.length + 1)
    })
})
