import axios from "axios";
import Todo from "../models/Todo";
import {mapToTodoData} from "../utils/mapToTodoData";


export const getTodoData = async (start:number, end:number):Promise<Todo[]> => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos`,
    {
      params: {
        _limit: end,
      },
    }
  );
  const result = response.data.slice(start, end);
  return mapToTodoData(result);
};

export const postTodoData = async (userId:string, details:string, isCompleted:boolean) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    {
      userId: userId,
      title: details,
      completed: isCompleted,
    }
  );

  alert(response.status);
  return response.data;
};

export const putTodoData = async (val: Todo) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/todos/${val.id}`,
    val
  );
  alert(response.status);
};

export const deleteTodoData = async (num:number) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/todos/${num}`
  );

  alert(response.status);
};
