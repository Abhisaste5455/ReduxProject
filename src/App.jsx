import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo } from "./ToDoSlice";

function App() {

  const [inputvalue, setinputvalue] = useState("");
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch();

  const addtodos = () => {
    if (inputvalue.trim()) {
      dispatch(addtodo(inputvalue));
      setinputvalue("");
    }
  }

  const Removetodo = (id) => {
    dispatch(removetodo(id))
  }


  function getinput(e) {
    setinputvalue(e.target.value);
  }

  return (
    <>
      <div className="container">
        <section className="todo-section ">
          <div className="todo-div">
            <h1 className="my-5 text-center fw-bolder">ToDo List</h1>

            <div className="inp d-flex gap-3 align-items-center"> 
              <span className=""><input type="text" className="border border-2 border-dark" placeholder="Add a new todo" value={inputvalue} onChange={getinput} required /></span>
              <span className="">
                <button type="button" className="btn-2 btn p-2" onClick={addtodos}>Add</button>
              </span>
            </div>


            <div className="mt-4">
              <ul className="p-0 ">
                {
                  todos.map((todo) => {
                    return (
                      <li className="todo-li p-1 mb-1 list1 bg-dark" key={todo.id}>
                        {todo.text}{""}
                        <button type="button" className="" onClick={() => Removetodo(todo.id)}>Remove<i class="bi bi-trash3 "></i></button>
                      </li>
                    )
                  })
                }
              </ul>

            </div>

          </div>

        </section>
      </div>
    </>
  )
}

export default App
