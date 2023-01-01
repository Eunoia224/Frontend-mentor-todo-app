import React, { createContext, useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";
const Context = createContext();

export const StateContext = ({ children }) => {
  const initialState: { id: any, todo: string, completed: boolean }[] = [
    {
      id: nanoid(),
      todo: "Lorem ipsum dolor sit ametx.",
      completed: true,
    },
    {
      id: nanoid(),
      todo: "Lorem ipsum dolor sit ametssss.",
      completed: true,
    },
    {
      id: nanoid(),
      todo: "Lorem ipsum dolor sit ametsss.",
      completed: false,
    },
    {
      id: nanoid(),
      todo: "Lorem ipsum dolor sit ametss.",
      completed: false,
    },
    { id: nanoid(), todo: "Lorem ipsum dolor sit amets.", completed: false },
  ];

  const [todoInput, setTodoInput] = useState("");
  //   const [todo, setTodo] = useState < any > initialState;
  const [todo, setTodo] = useState(initialState);
  //   const [tasks, setTasks] = useState < any > todo;
  const [tasks, setTasks] = useState(todo);

  const [selection, setSelection] = useState("All");

  localStorage.setItem("my_todo", JSON.stringify(todo));
  let todoFromLocalStorage: any = JSON.parse(
    localStorage.getItem("my_todo") || "{}"
  );

  const trackTodoInput = (e: any) => {
    setTodoInput(e.target.value);
  };
  // creates todo
  const createTodo = (e: any) => {
    if (e.key === "Enter") {
      if (e.target.value.length === 0) {
        alert("That todo appears to be an empty field check and try again.");
      } else if (todo.indexOf(e.target.value) !== -1) {
        alert("It appears you are trying add a todo that already exists.");
      } else {
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
  const [lightTheme, setLightTheme] = useState(true);

  localStorage.setItem("my_theme", JSON.stringify(lightTheme));

  let themeFromLocalStorage: any = JSON.parse(
    localStorage.getItem("my_theme") || "{}"
  );
  useEffect(() => {
    setLightTheme(themeFromLocalStorage);
  }, [themeFromLocalStorage]);

  // set theme to dark or white
  const toggleTheme = () => {
    setLightTheme((prevTheme: any) => !prevTheme);
  };

  // handle the selection/filtering of items in the todo list
  const handleFiltering = (setTo: string) => {
    setSelection(setTo);
  };

  return (
    <Context.Provider
      value={{
        todoInput,
        setTodoInput,
        todo,
        setTodo,
        tasks,
        setTasks,
        selection,
        setSelection,
        trackTodoInput,
        createTodo,
        removeAllCompleted,
        actives,
        todoCounter,
        removeTodo,
        handleCompletion,
        toggleTheme,
        handleFiltering,
        lightTheme,
        setLightTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
