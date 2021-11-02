import {PrismaTaskRepository} from "./PrismaTaskRepository";
import prisma from "../../../lib/prisma";

describe("PrismaTaskRepository", () => {
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
})
