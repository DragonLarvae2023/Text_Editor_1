import React, {
  createContext,
  useRef,
  useEffect,
  useState,
  useContext,
} from "react";
import ReactDOM from "react-dom/client";
import Tiptap from "./components/TipTap";
const Context = createContext("");
const App = () => {
  const [text, setText] = useState();
  return (
    <>
      <Context.Provider value={{ text, setText }}>
        <AreaInput />
        <Display/>
      </Context.Provider>
    </>
  );
};
const Heading = () => {
  return (
    <h1 className="bg-neutral-400 text-7xl">
      hi this is the text i want to display
    </h1>
  );
};
const AreaInput = () => {
  const { text, setText } = useContext(Context);
  const areaRef = useRef();
console.log(setText)
  useEffect(() => {
    const handleChange = (e) => {
      setText(e.target.value);
      console.log(e.target.value);
    };

    const textarea = areaRef.current;
    textarea.addEventListener("change", handleChange);

    // Cleanup the event listener on component unmount
    return () => {
      textarea.removeEventListener("change", handleChange);
    };
  }); // Dependency array includes setText to avoid stale closures

  return (
    <textarea
      cols="30"
      rows="10"
      className="textArea bg-slate-400"
      ref={areaRef}
 
    ></textarea>
  );
};

const root = ReactDOM.createRoot(document.getElementsByTagName("body")[0]);

const Display = () => {
  const { text } = useContext(Context);
  const disRef = useRef();
  return (
    <div className="bg-green" ref={disRef}>
      {text}
    </div>
  );
};
root.render(<App />);
