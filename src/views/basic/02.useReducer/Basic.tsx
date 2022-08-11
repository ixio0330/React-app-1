import { ChangeEvent, MouseEvent, useCallback, useMemo, useReducer, useRef } from "react";
import UserList from "../../../components/basic/UserList"
import CreateUser from "../../../components/basic/CreateUser";

export type User = {
  id: number;
  username: string;
  email: string;
  actvie: boolean;
}

type InitalState = {
  inputs: {
    username: string,
    email: string,
  };
  users: User[]
}

type ActionType = {
  type: 'CHANGE_INPUT' | 'INIT_INPUT' | 'CREATE_USER' | 'DELETE_USER' | 'TOGGLE_ACTIVE';
  key: string;
  value: string | number | User;
}

type StateType = InitalState;

const initalState: InitalState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
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
  ]
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'INIT_INPUT':
      return {
        ...state,
        inputs: {
          username: '',
          email: '',
        }
      } as StateType;
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.key]: action.value,
        }
      } as StateType;
    case 'CREATE_USER':
      return {
        ...state,
        users: state.users.concat(action.value as User),
      } as StateType;
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.value),
      } as StateType;
    case 'TOGGLE_ACTIVE':
      return {
        ...state,
        users: state.users.map((user) => user.id === action.value ? { ...user, actvie: !user.actvie } as User : user),
      } as StateType;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export default function Basic() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { users } = state;
  const { username, email } = state.inputs;
  const nextId = useRef(4);
  const onCreate = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const user: User = {
      id: nextId.current,
      username,
      email,
      actvie: true,
    };
    dispatch({ type: 'CREATE_USER', key: '', value: user });
    dispatch({ type: 'INIT_INPUT', key: '', value: '' });
    nextId.current += 1;
  }, [username, email]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_INPUT', key: name, value });
  }

  const onRemove = useCallback((id: number) => {
    dispatch({ type: 'DELETE_USER', key: '', value: id });
  }, []);

  const onToggleActive = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE_ACTIVE', key: '', value: id });
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