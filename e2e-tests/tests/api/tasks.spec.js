const BFF_URL = Cypress.env('BFF_URL')

describe('tasks', () => {
    describe('GET /tasks', () => {
        it('should return found tasks', () => {
            cy
                .request({
                    method: 'GET',
                    url: BFF_URL + '/tasks'
                })
                .should((response) => {
                    expect(response.status).to.eq(200)
                });
        });
    });

    describe('POST /tasks', () => {
        it('should add a task', () => {
            cy
                .request({
                    method: 'POST',
                    url: BFF_URL + '/tasks',
                    body: {
                        title: 'une tâche rajouté par Cypress'
                    },
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                .should((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body.message).to.eq("La tâche a bien été ajouté")
                })
        })
    })
});
