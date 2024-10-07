import { useEffect, useState } from 'react';
import { fetchTodos } from '../lib/api';
import { TodoType } from '../types/Todo';
import Todo from './Todo';
import Link from 'next/link';

// Todo一覧を表示するコンポーネント
const Todos = () => {
  // Todo一覧を管理するState
  const [todos, setTodos] = useState<TodoType[]>([]);

  // Todo一覧を取得する関数
  useEffect(() => {
    const getTodos = async () => {
      try {
        const todosData = await fetchTodos();
        setTodos(todosData);
      } catch (err) {
        console.log(err); // エラーハンドリング
      }
    };

    // Todo一覧を取得する関数を呼び出す
    getTodos();
  }, []);

  return (
    <div className="space-y-6 w-3/4 max-w-lg pt-10">
      <label className="block text-xl font-bold text-gray-700">Todo Index</label>
      <div className="items-center justify-center">
        {todos.map((todo) => (
          <Link
            href={`todos/${todo.id}`}
            key={todo.id}
          >
            <Todo todo={todo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Todos;