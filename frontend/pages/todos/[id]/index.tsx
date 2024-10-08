import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Link from "next/link"
import Todo from "@/components/Todo"
import { TodoType } from "@/types/Todo"
import { fetchTodo } from "@/lib/api"

const TodoDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const [todo, setTodo] = useState<TodoType | null>()

  useEffect(() => {
    const todoId = Number(id)
    if (isNaN(todoId)) {
      throw new Error("Invalid ID format")
    }
    const getTodo = async () => {
      try {
        const todoData = await fetchTodo(todoId)
        setTodo(todoData)
      } catch (err) {
        console.log(err)
      }
    }

    if (id) {
      getTodo()
    }
  }, [id])

  if (!todo) {
    return <div>Loading...</div>
  }
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col space-y-6 w-3/4 max-w-lg pt-10">
        <label className="block text-xl font-bold text-gray-700">Todo</label>
        <Todo todo={todo} />
        <div className="flex justify-end">
          <Link
            href="/"
            className="mt-auto font-medium text-blue-600 hover:bg-blue-300 focus:outline-none"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TodoDetail
