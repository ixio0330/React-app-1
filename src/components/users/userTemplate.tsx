import UseAsync from "../../hooks/useAsync"
import { getAll } from "../../api/user";
import UserList from "./userList";
import Spinner from "../common/Spinner";

export default function UserTemplate() {
  const { state, fetch } = UseAsync(getAll, []);
  const { data, error, loading } = state;
  if (loading) return <Spinner />
  if (error) return <div>Error!</div>
  if (!data) return <div>No data. <button onClick={ fetch }>fetch</button></div>
  return (
    <div>
      <UserList userList={data} />
      <button onClick={ fetch }>reFetch</button>
    </div>
  )
}