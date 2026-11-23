import { useQuery } from '@tanstack/react-query'
import api from '../services/api'

interface Post {
  id: number
  title: string
  body: string
}

function Home() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],

    queryFn: async () => {
      const response = await api.get<Post[]>('/posts')
      return response.data.slice(0, 5)
    },
  })

  if (isLoading) {
    return <p className="p-10">Loading posts...</p>
  }

  if (isError) {
    return <p className="p-10 text-red-500">{error.message}</p>
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        React Query Test
      </h1>

      {posts?.map((post) => (
        <div key={post.id} className="mb-4 border-b pb-4">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Home