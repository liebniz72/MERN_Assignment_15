/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import toast from "react-hot-toast";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.length === 0) {
      toast.error("Please enter a todo item.");
      return;
    }

    setTodoList([...todoList, { text: todo, checked: false }]);
    setTodo("");
  };

  const handleRemove = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  const handleCheckboxChange = (index) => {
    const updatedList = [...todoList];
    updatedList[index].checked = !updatedList[index].checked;
    setTodoList(updatedList);
  };

  function TodoItem({ data, index }) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div className="d-flex align-items-center">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            checked={data.checked}
            onChange={() => handleCheckboxChange(index)}
          />
          {data.checked ? <s>{data.text}</s> : data.text}
        </div>
        <div onClick={() => handleRemove(index)}>
          <a href="#">
            <IoMdRemoveCircle size={23} color="#d11a2a" />
          </a>
        </div>
      </li>
    );
  }

  return (
    <section className="h-100" style={{ backgroundColor: "#4CA1F2" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h6 className="mb-3">Awesome Todo List</h6>

                <form
                  onSubmit={handleSubmit}
                  className="d-flex justify-content-center align-items-center mb-4"
                >
                  <div className="form-outline flex-fill">
                    <input
                      onChange={(e) => setTodo(e.target.value)}
                      value={todo} // Bind the input value to the `todo` state
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Enter your todo here..."
                    />
                  </div>
                  <button className="btn btn-primary btn-lg ms-2">Add</button>
                </form>

                <ul className="list-group mb-0">
                  {todoList.length > 0 &&
                    todoList.map((data, index) => {
                      return <TodoItem key={index} data={data} index={index} />;
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodoList;
