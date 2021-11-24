import {PrismaTaskRepository} from "./PrismaTaskRepository";
import prisma from "../lib/prisma";

describe("PrismaTaskRepository", () => {
    beforeEach(async () => {
        await prisma.task.deleteMany()
    })

    afterEach(async () => {
        await prisma.task.deleteMany()
    })

    describe("finAllTasks", () => {
        describe("when there is no task", () => {
            it('should return empty array', async () => {
                const result = await PrismaTaskRepository.findAllTasks()

                expect(result).toHaveLength(0)
            })
        })

        describe('when there is some tasks', () => {
            beforeEach(async () => {
                await prisma.task.createMany({
                    data: [
                        {
                            title: '',
                            done: false,
                        },
                        {
                            title: '',
                            done: true,
                        },
                    ],
                })
            })

            afterEach(async () => {
                const deleteTasks = prisma.task.deleteMany()
                await prisma.$transaction([
                    deleteTasks
                ])

                await prisma.$disconnect()
            })

            it('should return array of tasks', async () => {
                const result = await PrismaTaskRepository.findAllTasks()

                expect(result).toHaveLength(2)
            })
        })
    })
    
    describe("addTask", () => {
        it('should add a task in the database', async () => {
            const taskToAdd = 'Une tâche'

            await PrismaTaskRepository.addTask(taskToAdd)
            const result = await prisma.task.findFirst({ where: { title: taskToAdd, done: false }  })

            expect(result).toBeDefined()
            expect(result && result.id).toBeDefined()
            expect(result && result.title).toBe(taskToAdd)
            expect(result && result.done).toBe(false)
        })
    })
})
