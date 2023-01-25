import { Task } from "../entity/task";

export interface RepositoryInterface {
    async since(since: Date): Promise<Task[]>;
    async persist(task: Task): Promise<Task>;
}
