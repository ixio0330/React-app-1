import UseAsync from "../../hooks/useAsync";
import { UserDto, getById } from "../../api/user";

export default function UserDetail(props: { id: number }) {
  const { state, fetch } = UseAsync<UserDto>(() => getById(props.id));
  const { data, error, loading } = state;

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>
  if (!data) return <div>No data.</div>
  return (
    <div>
      <p>phone: { data.phone }</p>
      <p>website: {data.website}</p>
      <button onClick={ fetch } >refetch</button>
    </div>
  )
}