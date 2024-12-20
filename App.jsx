import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';
import UserList from './UserList';

function App() {

  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value);



  return (
    <div>

      <UserList />

    </div>
  )
}






export default App




