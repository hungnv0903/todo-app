import React, { useState } from 'react'

interface IAddTodoProps {
    handleAddItem : (value:string)=>void  ;
}

const AddTodo = ({handleAddItem}:IAddTodoProps) => {

    const [inputValue , setInputValue] = useState('') ; 

    const handleChangeInput = (event:any)=>{
        setInputValue(event.target.value) ; 
    }

    const handleSubmitForm = (event:any)=>{
        event.preventDefault() ; 
        handleAddItem(inputValue) ; 
        setInputValue('') ; 
    }

  return (
    <div className='row'>
      <div className='col-8 m-auto'>
        <form action="" onSubmit={handleSubmitForm} className='d-flex'>
            <input type="text" value={inputValue} className='form-control border-3 border-warning' onChange={handleChangeInput} />
            <button className='btn btn-success ms-3 fw-bold' type='submit'>+</button>
        </form>
      </div>
    </div>
  )
}

export default AddTodo
