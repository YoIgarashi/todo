import Todos from '@/components/Todos';

// トップページ
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Todos />
    </div>
  );
}