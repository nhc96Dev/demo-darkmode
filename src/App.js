import { useState, useEffect } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import Slogan from "./components/Slogan/Slogan";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMoible, setIsMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  useEffect(() => {
    windowSize.width < 500 ? setIsMobile(true) : setIsMobile(false);
  }, [windowSize]);
  return (
    <div className="h-screen px-4 py-8 overflow-x-hidden overflow-y-auto text-black font-sora bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500 dark:text-white md:px-16 laptop:px-18 desktop:px-28">
      <Navbar isMobile={isMoible} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
