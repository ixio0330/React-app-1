import { PostDto } from "../../api/post";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { FaRegUserCircle } from 'react-icons/fa'
import { CgComment } from 'react-icons/cg';

const PostItemTemplate = styled.li`
  min-height: 250px;
  border: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 50px;
  display: flex;
`;

const PostItemInfoBlock = styled.div`
  min-width: 150px;
  border-right: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PostItemDate = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 40%;
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PostItemIcon = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PostItemContent = styled.div`
  position: relative;
  width: 100%;
`

const PostItemDetailButton = styled.button`
  all: unset;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.color};
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color};
  &:hover {
    border-color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.text};
  }
`

const PostItemContentHeader = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`

const PostItemContentBody = styled.div`
  padding: 10px;
`

export default function PostItem(props: { post: PostDto }) {
  const { post } = props;
  const todayDate = new Date().toLocaleDateString().split('. ');
  const navi = useNavigate();
  return (
    <PostItemTemplate>
      <PostItemInfoBlock>
        <PostItemDate>
          <p>{todayDate[0]}/{todayDate[1]}</p>
          <h2>{todayDate[2].slice(0, -1)}</h2>
        </PostItemDate>
        <PostItemIcon>
          <FaRegUserCircle size={30} />
        </PostItemIcon>
      </PostItemInfoBlock>
      <PostItemContent>
        <PostItemContentHeader>
          <b>Post{post.id}</b>
          {new Date().toLocaleTimeString()}
          <CgComment color="#eb3471" />{Math.floor(Math.random() * 100) + 1}
        </PostItemContentHeader>
        <PostItemContentBody>
          <p>{ post.title }</p>
          <p>{ post.body }</p>
          <PostItemDetailButton onClick={() => {navi(`/post/${post.id}`)}}>자세히 보기</PostItemDetailButton>
        </PostItemContentBody>
      </PostItemContent>
    </PostItemTemplate>
  )
}