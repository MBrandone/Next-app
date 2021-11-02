import {screen} from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import ToDoList from "../../pages/todoList";
import {render} from "@testing-library/react";

describe('Todo List', () => {
    test("Quand j'arrive sur la page, j'ai une liste vide", () => {
        // when
        render(<ToDoList/>)

        // then
        expect(screen.getByRole("list")).toBeDefined()
        expect(screen.queryAllByRole("listitem").length).toBe(0)

    })

    test("Quand je rentre un todo et que je clique sur ajouter, le todo s'affiche dans la liste", () => {
        // given
        render(<ToDoList/>)
        userEvent.type(screen.getByRole('textbox'), 'une nouvelle tâche')

        // when
        userEvent.click(screen.getByText('Ajouter à la todo list'))

        // then
        expect(screen.getByText("une nouvelle tâche")).toBeDefined()
    })
})
