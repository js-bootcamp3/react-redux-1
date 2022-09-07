import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, saveUser } from '../../store/actions';

export const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((store => store.users));
  
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const handleCreate = () => {
    const payload = {
      namesss: "morpheus",
      job: "leader"
    }

    dispatch(saveUser(payload)) 
  }

  return (
    <div>
      <h1>Users</h1>
      <button onClick={handleCreate}>CREATE</button>
      {users.map(user => <div>{user.email} {user.first_name} {user.last_name}</div>)}
    
    </div>
  )
}
