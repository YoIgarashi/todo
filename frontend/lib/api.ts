import axios from 'axios';
import { TodoType } from '../types/Todo';

// Todo一覧を取得する関数
export const fetchTodos = async (): Promise<TodoType[]> => {
  try {
    const res = await axios.get<TodoType[]>('http://localhost:3000/todos');
    return res.data; // Todo一覧を返す
  } catch (err) {
    console.error('Error fetching todos:', err);
    throw err; // エラーを再スローして呼び出し元でハンドリング
  }
};