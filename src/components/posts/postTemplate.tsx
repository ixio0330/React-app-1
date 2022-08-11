import { getAll } from "../../api/post";
import UseAsync from "../../hooks/useAsync";
import PostList from "./postList";

export default function PostTemplate() {
  const { state, fetch } = UseAsync(getAll);
  const { loading, error, data } = state;

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>
  if (!data) return <div>No data.</div>
  return (
    <div>
      <PostList posts={ data } />
      <button onClick={ fetch }>refetch</button>
    </div>
  )
}