import { DiffType } from "../entity/task-diff.js";

export class TaskDiffService {
    /**
     * @param {import("../repository/task-repository").TaskRepository} taskRepository
     */
    constructor(taskRepository) {
        this._taskRepository = taskRepository;
    }

    /**
     * @param {import("../entity/task").Task[]} notionTasks
     * @param {import("../entity/task").Task[]} githubTasks
     */
    async execute(notionTasks, githubTasks) {
        const diff = [];
        for (let task of notionTasks) {
            await this.fromNotionDiff(task, diff);
        }

        return diff;
    }

    /**
     * @param {import("../entity/task").Task} task
     * @param {Map} diff
     */
    async fromNotionDiff(task, diff) {
        let localTask = await this._taskRepository.findByNotionId(task.notionId);
        if (!localTask) {
            diff.push({ action: DiffType.createIssue, task });
        } else {
            if (task.project) {
                if (!localTask.githubId || localTask.project.uid !== task.project.uid) {
                    diff.push({ action: DiffType.createIssue, task });
                } else {
                    /** @type {import("../entity/task").Task} */
                    const taskDiff = {};
                    if (localTask.title !== task.title) {
                        taskDiff.title = task.title;
                    }
                    if (localTask.description !== task.description) {
                        taskDiff.description = task.description;
                    }
                    if (localTask.type.uid !== task.type.uid) {
                        taskDiff.type = task.type;
                    }
                    if (localTask.priority.uid !== task.priority.uid) {
                        taskDiff.priority = task.priority;
                    }
                    if (localTask.assignee.uid !== task.assignee.uid) {
                        taskDiff.assignee = task.assignee;
                    }
                    if (localTask.estimate !== task.estimate) {
                        taskDiff.estimate = task.estimate;
                    }
                    if (localTask.status.uid !== task.status.uid) {
                        taskDiff.status = task.status;
                    }

                    diff.set(localTask.uid, { action: DiffType.updateIssue, task: taskDiff });
                }
            }
        }
    }
}
