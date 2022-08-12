import { CommentDto } from "../../api/comment";
import CommentDetail from "./CommentDetail";

export default function CommentList(props: { comments: CommentDto[] }) {
  const { comments } = props;
  return (
    <ul>
      {
        comments.map((comment) => <CommentDetail key={comment.name} comment={comment} />)
      }
    </ul>
  )
}