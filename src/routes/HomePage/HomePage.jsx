import React from 'react'
import "./homepage.scss"
import { Search } from '../../component/SearchBar/Search'
import Todos from '../../component/TodosLayout/Todos'

const HomePage = () => {
  return (
    <div className='main'>
      <div className='addtodo'>
        <button className='add-todo'>Add Task</button>
        
      </div>
      <div className='searchBar'>
    <Search/>
      </div>
      <div>
        <Todos/>
      </div>
      
    </div>
  )
}

export default HomePage