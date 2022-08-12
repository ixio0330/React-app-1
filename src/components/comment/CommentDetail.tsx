import { CommentDto } from "../../api/comment";
import styled from "styled-components";

const CommentDetailTemaplte = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 20px;
  margin-bottom: 20px;
`

export default function CommentDetail(props: { comment: CommentDto }) {
  const { comment } = props;
  return (
    <CommentDetailTemaplte>
      <p>{comment.name}</p>
      <p>{comment.body}</p>
    </CommentDetailTemaplte>
  );
}