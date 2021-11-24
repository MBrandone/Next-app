const faker = require('faker')
let SERVER_URL = Cypress.env('SERVER_URL')

const taskPage = SERVER_URL + '/tasks'

describe('tasks', () => {
    describe('when I add a task, and I refresh task page', () => {
        it('just added task should be present on the screen', async() => {
            cy.visit(taskPage)

            const newTask = faker.random.words(6)
            cy.get('input[name=taskToAdd]').type(newTask)
            cy.contains('button', 'Ajouter').click()
            cy.get('li').last().should('have.text', newTask)
            cy.wait(1000)

            cy.visit(taskPage)
            cy.get('li').last().should('have.text', newTask)
        });
    });
});
