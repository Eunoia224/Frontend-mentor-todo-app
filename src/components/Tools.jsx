import React from "react";

const Tools = (props: any) => {
  return (
    <>
      {props.todo.length >= 1 ? (
        <>
          <div className="">
            {props.windowSize.innerWidth < 700 ? (
              <>
                <div
                  className={`${
                    props.lightTheme ? " bg-white" : " bg-dk-vd-blue"
                  } 
                  ${props.windowSize.innerWidth < 650 ? "min" : "widthAd"}
      
     
                  
                  flex justify-between rounded-b  gap-4 mx-auto  text-sm text-lt-dark-gray-blue border-1 border-lt-light-gray shadow-2xl px-5 py-4  z-50`}
                >
                  <div
                    className={`${
                      props.lightTheme
                        ? "hover:text-dk-v-dark-blue"
                        : "hover:text-lt-light-gray"
                    } cursor-pointer `}
                  >
                    {props.todoCounter} items left
                  </div>
                  <div
                    className={`${
                      props.lightTheme
                        ? "hover:text-dk-v-dark-blue"
                        : "hover:text-lt-light-gray"
                    } cursor-pointer `}
                    onClick={props.removeAllCompleted}
                  >
                    Clear Completed
                  </div>
                </div>
                <div
                  className={`${
                    props.lightTheme ? " bg-white" : " bg-dk-vd-blue"
                  } 
                  ${props.windowSize.innerWidth < 650 ? "min" : "widthAd"}
                  
                  gap-4 mx-auto  text-sm text-lt-dark-gray-blue border-1 border-lt-light-gray shadow-2xl px-5 py-4 rounded-xl z-50 mt-8`}
                >
                  <div className="flex flex-row justify-around">
                    <div
                      className={`${
                        props.lightTheme
                          ? "hover:text-dk-v-dark-blue"
                          : "hover:text-lt-light-gray"
                      } ${
                        props.selection === "All"
                          ? " text-primary-bright-blue"
                          : ""
                      } cursor-pointer `}
                      onClick={() => props.handleFiltering("All")}
                    >
                      All
                    </div>
                    <div
                      className={`${
                        props.lightTheme
                          ? "hover:text-dk-v-dark-blue"
                          : "hover:text-lt-light-gray"
                      } ${
                        props.selection === "Active"
                          ? " text-primary-bright-blue"
                          : ""
                      } cursor-pointer `}
                      onClick={() => props.handleFiltering("Active")}
                      // onClick={showActive}
                    >
                      Active
                    </div>
                    <div
                      className={`${
                        props.lightTheme
                          ? "hover:text-dk-v-dark-blue"
                          : "hover:text-lt-light-gray"
                      } ${
                        props.selection === "Completed"
                          ? " text-primary-bright-blue"
                          : ""
                      } cursor-pointer `}
                      onClick={() => props.handleFiltering("Completed")}
                      // onClick={}
                    >
                      Completed
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`${
                    props.lightTheme ? " bg-white" : " bg-dk-vd-blue"
                  } flex justify-between rounded-b gap-4 widthAd mx-auto  text-sm text-lt-dark-gray-blue border-1 border-lt-light-gray shadow-2xl px-5 py-4  z-50`}
                >
                  <div
                    className={`${
                      props.lightTheme
                        ? "hover:text-dk-v-dark-blue"
                        : "hover:text-lt-light-gray"
                    } cursor-pointer `}
                  >
                    {props.todoCounter} items left
                  </div>
                  <div className="flex justify-items-stretch">
                    <div
                      className={`${
                        props.lightTheme
                          ? "hover:text-dk-v-dark-blue"
                          : "hover:text-lt-light-gray"
                      } ${
                        props.selection === "All"
                          ? " text-primary-bright-blue"
                          : ""
                      } cursor-pointer mr-5`}
                      onClick={() => props.handleFiltering("All")}
                    >
                      All
                    </div>
                    <div
                      className={`${
                        props.lightTheme
                          ? "hover:text-dk-v-dark-blue"
                          : "hover:text-lt-light-gray"
                      } ${
                        props.selection === "Active"
                          ? " text-primary-bright-blue"
                          : ""
                      } cursor-pointer mr-5`}
                      onClick={() => props.handleFiltering("Active")}
                      // onClick={showActive}
                    >
                      Active
                    </div>
                    <div
                      className={`${
                        props.lightTheme
                          ? "hover:text-dk-v-dark-blue"
                          : "hover:text-lt-light-gray"
                      } ${
                        props.selection === "Completed"
                          ? " text-primary-bright-blue"
                          : ""
                      } cursor-pointer `}
                      onClick={() => props.handleFiltering("Completed")}
                      // onClick={}
                    >
                      Completed
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${
                        props.lightTheme
                          ? "hover:text-dk-v-dark-blue"
                          : "hover:text-lt-light-gray"
                      } cursor-pointer `}
                      onClick={props.removeAllCompleted}
                    >
                      Clear Completed
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center mt-10">
            <p className="text-lt-dark-gray-blue text-sm">
              Drag and drop to reorder list
            </p>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Tools;
