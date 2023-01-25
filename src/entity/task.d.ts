import { Project } from "./project";
import { Status } from "./status";
import { Type } from "./type";
import { User } from "./user";

export class Task {
    uid: string;
    editedAt: Date;
    notionId: string;
    githubId: number;
    project: Project;
    title: string;
    description: string;
    comments: Comment[];
    type: Type;
    priority: Priority;
    assignee: User;
    estimate: number;
    status: Status;
}
