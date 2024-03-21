import AppName from "./components/appName";
import AppToDo from "./components/AddToDo";

import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "24/2/24",
  //   },
  //   {
  //     name: "Do Homework",
  //     dueDate: "24/2/24",
  //   },
  //   {
  //     name: "Read Book",
  //     dueDate: "29/2/24",
  //   },
  //   {
  //     name: "Arrange Books",
  //     dueDate: "29/2/24",
  //   },
  // ];

  // const initialTodoItems = [];

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
