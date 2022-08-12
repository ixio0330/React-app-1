import { ReactElement } from "react";
import styled from "styled-components";

const ListItemTemplate = styled.li`
  min-height: 250px;
  border: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 50px;
  display: flex;
`;

const ListItemLeft = styled.div`
  min-width: 150px;
  border-right: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ListItemLeftRectangle = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 40%;
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ListItemLeftIcon = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ListItemRight = styled.div`
  position: relative;
  width: 100%;
`

const ListItemRightHeader = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`

const ListItemRightBody = styled.div`
  padding: 10px;
`

export default function ListItem(
  props: {
    rectangle?: ReactElement,
    icon?: ReactElement,
    header?: ReactElement,
    body?: ReactElement,
    actionButton?: ReactElement
  }) {
  const { rectangle, icon, header, body, actionButton } = props;
  return (
    <ListItemTemplate>
      <ListItemLeft>
        <ListItemLeftRectangle>
          { rectangle }
        </ListItemLeftRectangle>
        <ListItemLeftIcon>
          { icon }
        </ListItemLeftIcon>
      </ListItemLeft>
      <ListItemRight>
        <ListItemRightHeader>
          { header }
        </ListItemRightHeader>
        <ListItemRightBody>
          { body }
        </ListItemRightBody>
        { actionButton && actionButton }
      </ListItemRight>
    </ListItemTemplate>
  )
}