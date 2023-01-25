import { TaskRepository } from './src/repository/task-repository.js';
import { TaskDiffService } from './src/service/task-diff-service.js';

(async () => {
    const r = new TaskRepository();
    const s = new TaskDiffService(r);

    /** @type {import("./src/entity/task").Task[]} */
    const notionTasks = [
        {
            notionId: '123',
            project: {
                uid: '113',
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
        },
    ];
    await s.execute(notionTasks, []);
})();
