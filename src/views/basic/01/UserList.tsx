import React from 'react';
import { User } from './Basic';

const UserDetail = React.memo((props: { user: User, onRemove: any, onToggleActive:any }) => {
  const { user, onRemove, onToggleActive } = props;

  return (
    <li>
      <b style={user.actvie ? { cursor: 'pointer', color: '#00ffb7' } : { cursor: 'default', color: '#ddd' }}
        onClick={() => onToggleActive(user.id)}
      >
        {user.username}
      </b>
      <span>{user.email}</span>
      <button onClick={ () => onRemove(user.id) }>remove</button>
    </li>
  )
})

export default function UserList(props: { users: User[], onRemove: any, onToggleActive: any }) {
  const { users, onRemove, onToggleActive } = props;
  return (
    <div>
      <ul>
        {
          users.map((user) => <UserDetail key={user.id} user={user} onRemove={onRemove} onToggleActive={onToggleActive} />)
        }
      </ul>
    </div>
  )
}