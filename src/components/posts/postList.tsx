import { PostDto } from "../../api/post";
import PostItem from "./postItem";
import store from "../../store";
import { observer } from 'mobx-react';
import styled from "styled-components";

const PaginationButtonTemplate = styled.div`
  text-align: center;
`

export default observer(function PostList(props: { posts: PostDto[] }) {
  const { postStore } = store();
  const posts = props.posts.slice(postStore.startIndex, postStore.endIndex);
  return (
    <>
      <ul>
        {
          posts.map((post) => <PostItem key={ post.id } post={post} />)
        }
      </ul>
      <PaginationButtonTemplate>
        <button onClick={ () => postStore.onClickPrev() }>prev</button>
        <button onClick={ () => postStore.onClickNext(props.posts) }>next</button>
      </PaginationButtonTemplate>
    </>
  )
})