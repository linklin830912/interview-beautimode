import Todo from "../models/Todo"
export async function mapToTodoData(data: any): Promise<Todo[]>{
    return await data.map((x: { id: number; userId: string; title: string; completed: boolean; }) => {
        return {
            id: x.id as number,
            userId: x.userId.toString(),
            title: x.title.toString(),
            isCompleted: x.completed as boolean
        };
    })
}