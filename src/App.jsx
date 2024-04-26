import AppName from "./components/appName";
import AppToDo from "./components/AddToDo";

import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newTodoItems);
  };

  const handleDeleteitem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setToDoItems(newTodoItem);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppToDo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMsg />}
        <ToDoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteitem}
        ></ToDoItems>
      </center>
    </>
  );
}

export default App;
