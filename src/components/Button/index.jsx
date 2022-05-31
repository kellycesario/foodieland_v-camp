import { useEffect, useState } from "react";

import "./button.css";

export default function Button({ content, btnColor, btnSize }) {
  const [classColor, setClassColor] = useState("");
  const [classSize, setClassSize] = useState("");
  useEffect(() => {

    // btnColor && 
    if (btnColor == "dark") {
      setClassColor("btn--dark");
    } else if (btnColor == "light") {
      setClassColor("btn--light");
    }
  }, []);

  return (
    // dark
    // large
    // minimal

    <>
      <button className={"btn " + classColor}>{content}</button>
    </>
  );
}
