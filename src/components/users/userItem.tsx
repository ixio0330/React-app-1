import { useState } from "react";
import { UserDto } from "../../api/user";
import UserDetail from "./userDetail";

export default function UserItem(props: { user: UserDto }) {
  const { user } = props;
  const [showDetail, setShowDetail] = useState(false);
  return (
    <li>
      <div style={{ display: 'flex' }}>
        <p>id: { user.id }</p>
        <p>name: { user.name }</p>
      </div>
      <button onClick={() => setShowDetail(!showDetail)}>Show Detail</button>
      { showDetail && <UserDetail id={user.id} /> }
    </li>
  )
}