import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ListTodo from './components/ListTodo'
import AddTodo from './components/AddTodo'
import { ITodoItem } from './type/inedex'
import { nanoid } from 'nanoid'

function App() {
  const [listTodo , setListTodo] = useState<ITodoItem[]>([
    {
      id:"1",
      content:"Todo1",
      isCompleted:false
    },
    {
      id:"2",
      content:"Todo2",
      isCompleted:false
    }
  ]) ; 
  const handleAddItem = (value:string)=>{
    if(value!=''){
      const newItem = {
        id:nanoid(),
        content:value , 
        isCompleted:false
      }
      
      const newListTodo = [...listTodo , newItem] ; 
      setListTodo(newListTodo) ; 
      // console.log("Item : " , listTodo) ; 
    }
  }

  console.log("NewLisTodo : " , listTodo) ; 
  const handleDelItem = (id:string)=>{
    const newListTodo = listTodo.filter((item=>item.id!=id)) ; 
    setListTodo(newListTodo) ; 
    console.log(id) ; 
  }

  const handleChangeStatus = (id:string)=>{
    const todoChange = listTodo.filter(item=>item.id===id)[0] ; 
    todoChange.isCompleted = !todoChange.isCompleted ; 
    console.log(id) ; 
    const newListTodo = listTodo.map(item=>{
      if(item.id===id) return todoChange ; 
      return item ; 
    })
    setListTodo(newListTodo) ; 
  }
  console.log(listTodo) ; 
  return (
    <>
      <Header></Header>
      <AddTodo handleAddItem={handleAddItem}></AddTodo>
      <ListTodo 
        handleDelItem = {handleDelItem} 
        todoList={listTodo}
        handleChangeStatus={handleChangeStatus}>
      </ListTodo>
    </>
  )
}

export default App
