import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    // Check if todoName and dueDate are not empty
    if (todoName.trim() !== "" && dueDate.trim() !== "") {
      onNewItem(todoName, dueDate);
      // Clear input fields after adding item
      setDueDate("");
      setTodoName("");
    } else {
      // Display an alert or error message indicating that fields are empty
      alert("Todo name and due date must not be empty");
    }
  };

  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your tasks here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
