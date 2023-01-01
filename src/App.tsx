import React, { useState, useEffect } from "react";
import desktopLightBg from "./assets/bg-desktop-light.jpg";
import desktopDarkBg from "./assets/bg-desktop-dark.jpg";
import mobileLightBg from "./assets/bg-mobile-light.jpg";
import mobileDarkBg from "./assets/bg-mobile-dark.jpg";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  let themeFromLocalStorage: any = JSON.parse(
    localStorage.getItem("my_theme") || "{}"
  );
  const [lightTheme, setLightTheme] = useState(themeFromLocalStorage);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  localStorage.setItem("my_theme", JSON.stringify(lightTheme));

  useEffect(() => {
    setLightTheme(themeFromLocalStorage);
  }, [themeFromLocalStorage]);

  // TODO figure out a drag to adjust feature
  return (
    <div
      className={`${
        lightTheme ? "bg-lt-light-gray" : " bg-dk-v-dark-blue"
      } App text-lg pb-96`}
    >
      {windowSize.innerWidth < 600 ? (
        <img
          src={`${lightTheme ? mobileLightBg : mobileDarkBg}`}
          alt={`${
            lightTheme ? "Light theme background" : "Dark theme background "
          } `}
          className=" w-full md:h-full h-96 relative bg-cover bg-no-repeat bg-center"
          draggable="false"
          style={{ width: "1000%" }}
        />
      ) : (
        <img
          src={`${lightTheme ? desktopLightBg : desktopDarkBg}`}
          alt={`${
            lightTheme ? "Light theme background" : "Dark theme background "
          } `}
          className="w-full md:h-full h-96 relative bg-cover bg-no-repeat bg-center"
          draggable="false"
        />
      )}
      <div className="mx-0 px-6 ">
        <TodoList
          lightTheme={lightTheme}
          setLightTheme={setLightTheme}
          windowSize={windowSize}
        />
      </div>
    </div>
  );
}

export default App;
