import React, { useState } from "react";
import AllTodo from "./AllTodo";
import ActiveTodo from "./ActiveTodo";
import CompletedTodo from "./CompletedTodo";
import Header from "./Header";
import Tools from "./Tools";
import { nanoid } from "nanoid";

const TodoList = (props: any) => {
  const initialState: { id: any; todo: string; completed: boolean }[] = [
    {
      id: nanoid(),
      todo: "Complete online JavaScript course",
      completed: true,
    },
    { id: nanoid(), todo: "Jog around the park 3x", completed: false },
    { id: nanoid(), todo: "10 minutes meditation", completed: false },
    { id: nanoid(), todo: "Read for an hour", completed: false },
    { id: nanoid(), todo: "Pickup groceries", completed: false },
    {
      id: nanoid(),
      todo: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ];
  let todoFromLocalStorage: any = JSON.parse(
    localStorage.getItem("my_todo") || "{}"
  );

  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState<any>(todoFromLocalStorage);
  const [selection, setSelection] = useState("All");

  localStorage.setItem("my_todo", JSON.stringify(todo));

  const trackTodoInput = (e: any) => {
    setTodoInput(e.target.value);
  };
  // creates todo
  const createTodo = (e: any) => {
    if (e.key === "Enter") {
      if (e.target.value.length === 0) {
        alert("That todo appears to be an empty field check and try again.");
      }
      // else if (todo.indexOf(e.target.value) !== -1) {
      //   alert("It appears you are trying add a todo that already exists.");
      // }
      else {
        setTodo([{ id: nanoid, todo: todoInput, completed: false }, ...todo]);
        setTodoInput("");
        e.target.value = "";
      }
    }
  };
  // remove all completed at once
  const removeAllCompleted = () => {
    let newTodo: any = [...todo];
    newTodo.map((todo: any) => {
      for (let i = 0; i < newTodo.length; i++) {
        if (newTodo[i].completed) {
          newTodo.splice(i, 1);
          setTodo([...newTodo]);
        }
      }
    });
  };
  let actives: Array<any> = [];
  let todoCounter: number = 0;
  todo.map((task: any) => {
    return (
      !task.completed ? actives.push(task) : [],
      !task.completed ? todoCounter++ : 0
    );
  });

  // removes todo
  const removeTodo = (todoIndex: any) => {
    let newTodo: any = [...todo];
    newTodo.splice(todoIndex, 1);
    setTodo([...newTodo]);
  };
  // handles clicking the complete btn
  const handleCompletion = (completed: any, dataId: any) => {
    setTodo(
      todo.map((data: any) => {
        if (data.id === dataId) {
          const flipCompletion: boolean = !data.completed;
          return { ...data, completed: flipCompletion };
        } else {
          return data;
        }
      })
    );
  };
  // set theme to dark or white
  const toggleTheme = () => {
    props.setLightTheme((prevTheme: any) => !prevTheme);
  };

  // handle the selection/filtering of items in the todo list
  const handleFiltering = (setTo: string) => {
    setSelection(setTo);
  };

  return (
    <>
      <div className="h-9">
        <>
          {/* ______________________  HEADER ______________________ */}
          <Header
            lightTheme={props.lightTheme}
            toggleTheme={toggleTheme}
            trackTodoInput={trackTodoInput}
            createTodo={createTodo}
            windowSize={props.windowSize}
          />
          {/* ______________________ HEADER ENDS ______________________ */}
          {/* ______________________ ALL TODO ______________________ */}
          {selection === "All" ? (
            <AllTodo
              lightTheme={props.lightTheme}
              setLightTheme={props.setLightTheme}
              todo={todo}
              handleCompletion={handleCompletion}
              selection={selection}
              actives={actives}
              removeTodo={removeTodo}
              windowSize={props.windowSize}
            />
          ) : (
            ""
          )}
          {/* ______________________ALL TODO ENDS ______________________ */}
          {/* ______________________ ACTIVE TODO ______________________ */}
          {selection === "Active" ? (
            <ActiveTodo
              lightTheme={props.lightTheme}
              setLightTheme={props.setLightTheme}
              todo={todo}
              handleCompletion={handleCompletion}
              selection={selection}
              actives={actives}
              removeTodo={removeTodo}
              windowSize={props.windowSize}
            />
          ) : (
            ""
          )}
          {/* ______________________ ACTIVE TODO ENDS ______________________ */}
          {/* ______________________ COMPLETED TODO ______________________ */}
          {selection === "Completed" ? (
            <CompletedTodo
              lightTheme={props.lightTheme}
              setLightTheme={props.setLightTheme}
              todo={todo}
              handleCompletion={handleCompletion}
              selection={selection}
              actives={actives}
              removeTodo={removeTodo}
              windowSize={props.windowSize}
            />
          ) : (
            ""
          )}
          {/* ______________________ COMPLETED TODO ENDS ______________________ */}
          {/* ______________________ BOTTOM SETTINGS ______________________ */}

          <Tools
            todo={todo}
            todoCounter={todoCounter}
            selection={selection}
            handleFiltering={handleFiltering}
            lightTheme={props.lightTheme}
            setLightTheme={props.setLightTheme}
            removeAllCompleted={removeAllCompleted}
            windowSize={props.windowSize}
          />

          {/* ______________________ BOTTOM SETTINGS ENDS ______________________ */}
        </>
      </div>
    </>
  );
};

export default TodoList;
