import { PostDto } from "../../api/post";
import { useNavigate } from 'react-router-dom';

export default function PostItem(props: { post: PostDto }) {
  const navi = useNavigate();
  return (
    <li onClick={() => {navi(`/post/${props.post.id}`)}}>
      <p>ID: { props.post.id }</p>
      <p>Title: { props.post.title }</p>
    </li>
  )
}