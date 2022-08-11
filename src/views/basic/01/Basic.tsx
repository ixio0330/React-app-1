import { ChangeEvent, MouseEvent, useCallback, useMemo, useRef, useState } from "react";
import UserList from "./UserList"
import CreateUser from "./CreateUser";

export type User = {
  id: number;
  username: string;
  email: string;
  actvie: boolean;
}

export default function Basic() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'temp1',
      email: 'temp1@example.com',
      actvie: true,
    },
    {
      id: 2,
      username: 'temp2',
      email: 'temp2@example.com',
      actvie: false,
    },
    {
      id: 3,
      username: 'temp3',
      email: 'temp3@example.com',
      actvie: true,
    }
  ] as User[]);
  const { username, email } = inputs;
  const nextId = useRef(4);
  const onCreate = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const user: User = {
      id: nextId.current,
      username,
      email,
      actvie: true,
    };
    setUsers((users) => users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onRemove = useCallback((id: number) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggleActive = useCallback((id: number) => {
    setUsers(
      (users) => users.map((user) => (
        user.id === id ? { ...user, actvie: !user.actvie } as User : user
      ))
    );
  }, []);

  function countActiveUsers(users: User[]): number {
    return users.filter((user) => user.actvie).length;
  }

  const totalActiveUsers = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        uesrname={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggleActive={onToggleActive} />
      <div>활성 사용자 : { totalActiveUsers }</div>
    </>
  )
}