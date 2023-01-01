import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";


const ActiveTodo = (props: any) => {
  // eslint-disable-next-line
  const [tasks, setTasks] = useState(props.todo);

  let actives: Array<any> = [];

  props.todo.map((task: any) => {
    return !task.completed ? actives.push(task) : [];
  });
  

  return (
    <div
      className={`${
        props.windowSize.innerWidth < 650 ? "min" : "widthAd"
      } mx-auto`}>
      <ul className="relative ">
        {actives.map((todoData: any, index: number) => {
          return (
            <>
              <li
                key={todoData.id}
                className={`${
                  props.lightTheme
                    ? "bg-lt-light-gray shadow-lt-gray-blue"
                    : " bg-dk-vd-blue shadow-dk-vd-blue"
                } list-none  indent-8 py-4  rounded-t shadow-2xl  flex flex-row`}
              >
                <div className="mt-0 w-0 h-0 pr-10">
                  <input
                    type="checkbox"
                    className="cursor-pointer w-5 h-5"
                    checked={todoData.completed}
                    onChange={(e) =>
                      props.handleCompletion(e.target.checked, todoData.id)
                    }
                  />
                  <label>
                    <span className="w-6 h-6 custom-checkbox cursor-pointer"></span>
                  </label>
                </div>
                <div>
                  {/* The todo */}
                  <span
                    className={`${
                      todoData.completed
                        ? "line-through text-lt-dark-gray-blue"
                        : props.lightTheme
                        ? ""
                        : "text-lt-v-light-gray-blue"
                    } cursor-pointer`}
                  >
                    {props.selection === "Active" ? todoData.todo : ""}
                  </span>
                  <div className="text-xl pt-1 close-btn ">
                    {/* the x btn */}{" "}
                    <TfiClose
                      className="cursor-pointer -mt-7 text-lt-dark-gray-blue opacity-0 hover:opacity-100"
                      onClick={() => props.removeTodo(index)}
                    />
                  </div>
                </div>
              </li>
              <hr className="w-full border-lt-dark-gray-blue" />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ActiveTodo;
