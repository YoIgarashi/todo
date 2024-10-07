import axios from 'axios';
import { TodoType } from '../types/Todo';

// Todo一覧を取得する関数
export const fetchTodos = async (): Promise<TodoType[]> => {
  try {
    const res = await axios.get<TodoType[]>('http://localhost:3000/todos');
    return res.data
  } catch (err) {
    console.error('Error fetching todos:', err);
    throw err
  }
}

// Todo詳細を取得する関数
export const fetchTodo = async (id: number): Promise<TodoType> => {
  try {
    const res = await axios.get<TodoType>(`http://localhost:3000/todos/${id}`)
    return res.data
  } catch (err) {
    console.error('Error fetching todo:', err);
    throw err
  }
}