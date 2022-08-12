import styled from "styled-components";
import useAsync from "../../hooks/useAsync";
import { getById } from "../../api/post";
import CommentContainer from "../comment/CommentContainer";

const PostDetailHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PostDetailArticle = styled.div`
  text-align: right;
  padding: 20px 0;
`

const PostDetailBody = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 20px;
`

const CommentTitle = styled.h3`
  padding: 20px 0;
`

export default function PostDetailContainer(props: { id: string, state: any }) { 
  const { state, fetch } = useAsync(() => getById(parseInt(props.id)));
  const { loading, data: post, error } = state;

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>
  if (!post) return <div>찾을 수 없는 포스터</div>
  return (
    <>
      <PostDetailHeader>
        <h2>{post.title}</h2>
        <p>{new Date().toLocaleString()}</p>
      </PostDetailHeader>
      <PostDetailArticle>
        <h3>{props.state}</h3>
      </PostDetailArticle>
      <PostDetailBody>
        {post.body}
      </PostDetailBody>
      <CommentTitle>댓글목록</CommentTitle>
      <CommentContainer postId={parseInt(props.id)} />
    </>
  )
}