import { PostDto } from "../../api/post";
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa'
import { CgComment } from 'react-icons/cg';
import useAsync from "../../hooks/useAsync";
import { getById } from '../../api/user';
import ListItem from "../common/ListItem";
import DetailButton from "../button/DetailButton";

export default function PostItem(props: { post: PostDto }) {
  const { post } = props;
  const navi = useNavigate();
  const { state } = useAsync(() => getById(post.userId))
  const { data: user, error, loading } = state;
  if (loading) return <ListItem />
  if (error) return <div>Error!</div>
  if (!user) return <div>Can't find user</div>
  const todayDate = new Date().toLocaleDateString().split('. ');
  return (
    <ListItem
      rectangle={<>
        <p>{todayDate[0]}/{todayDate[1]}</p>
        <h2>{todayDate[2].slice(0, -1)}</h2>
      </>}
      icon={<FaRegUserCircle size={30} />}
      header={<>
        <span><b>Post{post.id}/</b></span>
        <span>{user.name}/</span>
        <span>{new Date().toLocaleTimeString()}/</span>
        <span>
          <CgComment color="#eb3471" />{Math.floor(Math.random() * 100) + 1}
        </span>
      </>}
      body={<>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </>}
      actionButton={<DetailButton onClick={() => {navi(`/post/${post.id}`, { state: user.name })}} text="자세히 보기" />}
    />
  )
}