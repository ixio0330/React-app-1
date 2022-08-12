import styled from "styled-components";
const DetailButtonTemplate = styled.button`
  all: unset;
  padding: 10px 20px;
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
`;

export default function DetailButton(props: { onClick: any, text: string }) {
  const { onClick, text } = props;
  return <DetailButtonTemplate onClick={onClick}>{ text }</DetailButtonTemplate>
}