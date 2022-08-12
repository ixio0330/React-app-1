import { useParams, useLocation } from 'react-router-dom';
import PostDetailContainer from '../../components/postDetail/PostDetailContainer';
export default function PostDetail() {
  const { id } = useParams();
  const { state } = useLocation();

  return <PostDetailContainer id={id as string} state={state} />
}