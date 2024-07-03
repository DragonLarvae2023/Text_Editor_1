import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
const MyContext = createContext("");
function MyComponent() {
  const [setOpen, change] = useState(false);
  return (
    <MyContext.Provider value={{ setOpen, change }}>
      <div>
        <Show />
        {setOpen&&<DialogBox />}
      </div>
    </MyContext.Provider>
  );
}

const DialogBox = () => {
  const { setOpen, change } = useContext(MyContext);
  return (
    <div className="bg-pink-400 relative h-20">
      <div className="bg-red-600 absolute top-0 left-0" onClick={()=>change(!setOpen)}>close</div>
      this is the dialog box
    </div>
  );
};

const Show = () => {
  const { setOpen, change } = useContext(MyContext);
  return (
    <div
      onClick={() => {
        change(!setOpen);
        console.log(setOpen);
      }}
    >
      {" "}
      {!setOpen ? "show the dialog Box" : "close the dialog box"}
    </div>
  );
};

export default MyComponent;
