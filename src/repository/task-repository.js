/** @implements {import("./repository-interface").RepositoryInterface} */
export class TaskRepository {
    /** @param {import("../entity/task").Task} */
    async persist(task) {
        task.uid = 'w432f';

        return task;
    }

    async findByGithubId() { }

    async findByNotionId() {
        /** @type {import("../entity/task").Task} */
        const task = {
            uid: 'abc123',
            notionId: '123',
            githubId: '132',
            project: {
                uid: '111',
                notionId: '123123',
                githubId: 'reponame',
                title: 'titulo do projeto'
            },
            title: 'Este é um teste',
            description: 'Aqui vai um texto qualquer',
            comments: [],
            type: {
                uid: '1222',
                notionId: 'asdfgsd',
                githubId: 'asdf34',
                description: 'task'
            },
            priority: {
                uid: 'sa324',
                notionId: 'asdf',
                githubId: 'adsa5',
                description: 'high'
            },
            assignee: {
                uid: 'a34',
                notionId: 'asdfg34',
                githubId: 'werrt45',
                name: 'Diego Martins'
            },
            estimate: 5,
            status: {
                uid: 't345',
                notionId: 'sd45',
                githubId: '234fg',
                description: 'sdaf5'
            }
        };

        return task;
    }

    async updateByDiff(diff) { }
}
