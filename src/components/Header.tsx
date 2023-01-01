import React from "react";

// eslint-disable-next-line
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const Header = (props: any) => {
  return (
    <div className="relative -mt-52 ">
      <header
        className={`${
          props.windowSize.innerWidth < 650 ? "min" : "widthAd"
        }
        
        
        inset-x-2/4 m-auto uppercase font-semibold space text-5xl text-lt-light-gray flex  justify-between `}
      >
        <div className="  flex flex-row justify-between title-container">
          <div>Todo</div>
          <RiMoonFill
            className={` cursor-pointer  ${props.lightTheme ? "" : "hidden"}`}
            onClick={props.toggleTheme}
          />
          <RiSunFill
            className={` cursor-pointer  ${props.lightTheme ? "hidden" : ""}`}
            onClick={props.toggleTheme}
          />
        </div>
      </header>
      {/* todo input */}
      <div className="flex justify-center">
        {/* the circle you see in the todo input */}
        <div className="relative">
          {/* <i className="checkbox w-5 h-5 rounded-full relative top-10 left-10 todo-check border-lt-v-light-gray-blue "></i> */}

          <div className="mt-10 ml-8 w-0 h-0 pr-10 absolute">
            <input
              type="checkbox"
              className="cursor-pointer w-5 h-5"
              checked={false}
            />
            <label>
              <span className="w-6 h-6 custom-checkbox cursor-pointer"></span>
            </label>
          </div>

          <input
            type="text"
            className={`${
              props.lightTheme
                ? "bg-white text-bg-dk-vd-blue"
                : " bg-dk-vd-blue text-white"
            } 
            ${props.windowSize.innerWidth < 650 ? "min" : "widthAd"} 
            
            
            mt-6 mb-10  h-14 rounded indent placeholder-shown:border-gray-500 caret-primary-bright-blue`}
            id="todoInput"
            placeholder="Create a new todo..."
            onChange={props.trackTodoInput}
            onKeyUp={props.createTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
