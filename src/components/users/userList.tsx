import { UserDto } from "../../api/user";
import UserItem from "./userItem";

export default function UserList(props: { userList: UserDto[] }) {
  return (
    <ul>
      {
        props.userList.map((user: UserDto) => <UserItem key={user.id} user={user} />)
      }
    </ul>
  )
}