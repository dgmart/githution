import { Task } from "./task";

export enum DiffType {
    createIssue,
    updateIssue
}

export class TaskDiff {
    action: DiffType;
    task: Task;
}
