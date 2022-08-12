import { getAll } from "../../api/post";
import UseAsync from "../../hooks/useAsync";
import PostList from "./postList";
import Spinner from "../common/Spinner";

export default function PostTemplate() {
  const { state } = UseAsync(getAll);
  const { loading, error, data } = state;

  if (loading) return <Spinner />
  if (error) return <div>Error!</div>
  if (!data) return <div>No data.</div>
  return <PostList posts={data} />
}