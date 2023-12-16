import React, { useState } from 'react'
import { ITodoItem } from '../type/inedex'

interface ListTodoProps {
    todoList: ITodoItem[];
    handleDelItem: (id: string) => void;
    handleChangeStatus: (id: string) => void;
}

const ListTodo = (props: ListTodoProps) => {
    const { todoList, handleDelItem, handleChangeStatus } = props;

    const [filterSate, setFilterState] = useState("all");

    const handleClickDelete = (id: string) => {
        handleDelItem(id);
    }

    const handleChangeSelect = (event:any) => {
        setFilterState(event.target.value)
    }

    const renderTodoList = () => {
        switch (filterSate) {
            case "all":
                return (
                    <div>
                        {todoList.map((item, index) => (
                            <div className='p-2' key={item.id}>
                                <div className='my-3 d-flex justify-content-between'>
                                    <span className='fs-4 fw-bold' style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
                                        onClick={() => handleChangeStatus(item.id)}>
                                        {index + 1}.  {item.content}
                                    </span>
                                    <i onClick={() => handleClickDelete(item.id)} className="fs-4 d-flex align-items-center fa-solid fa-trash"
                                        style={{ color: "#ff6905" }} />
                                </div>
                                <hr className='m-auto border-warning border-3' />
                            </div>
                        ))}
                    </div>

                )
                break;
            case "todo":
                return (
                    <div>
                        {todoList.map((item, index) => (
                            <div  key={item.id} className='p-2' style={{ display: item.isCompleted ? "none" : "block" }}>
                                <div className='my-3 d-flex justify-content-between'>
                                    <span className='fs-4 fw-bold' style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
                                        onClick={() => handleChangeStatus(item.id)}>
                                        {index + 1}.  {item.content}
                                    </span>
                                    <i onClick={() => handleClickDelete(item.id)} className="fs-4 d-flex align-items-center fa-solid fa-trash"
                                        style={{ color: "#ff6905" }} />
                                </div>
                                <hr className='m-auto border-warning border-3' />
                            </div>
                        ))}
                    </div>
                )


                break;
            case "done":
                return (
                    <div>
                        {todoList.map((item, index) => (
                            <div key={item.id} className='p-2' style={{ display: item.isCompleted? "block" : "none" }} >
                                <div className='my-3 d-flex justify-content-between'>
                                    <span className='fs-4 fw-bold' style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
                                        onClick={() => handleChangeStatus(item.id)}>
                                        {index + 1}.  {item.content}
                                    </span>
                                    <i onClick={() => handleClickDelete(item.id)} className="fs-4 d-flex align-items-center fa-solid fa-trash"
                                        style={{ color: "#ff6905" }} />
                                </div>
                                <hr className='m-auto border-warning border-3' />
                            </div>
                        ))}
                    </div>
                )

                break;
            default:
                break;
        }
    }
    return (
        <div className='col-8 m-auto bg-danger-subtle my-2 p-4 rounded-2'>
            <div className='row'>
                <div className='col d-flex justify-content-between'>
                    <h5 className='fs-4 fw-bold text-warning'>List</h5>
                    <select onChange={handleChangeSelect} value={filterSate} className='border-warning border-3 rounded-3' name="" id="">
                        <option value="all">All</option>
                        <option value="todo">Todo</option>
                        <option value="done">Done</option>
                    </select>
                </div>
            </div>
            {renderTodoList()}
        </div>
    )
}

export default ListTodo
