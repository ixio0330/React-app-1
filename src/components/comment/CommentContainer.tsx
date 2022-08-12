import useAsync from "../../hooks/useAsync"
import { getByPostId } from "../../api/comment"
import CommentList from "./CommentList";

export default function CommentContainer(props: { postId: number }) {
  const { state, fetch } = useAsync(() => getByPostId(props.postId));
  const { data: comments, loading, error } = state;

  if (loading) return <div>comment loading...</div>
  if (error) return <div>error</div>
  if (!comments) return <div>No comments.</div>
  return <CommentList comments={comments} />
}