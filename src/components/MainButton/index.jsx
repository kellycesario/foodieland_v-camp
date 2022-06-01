import { useEffect, useState } from "react";

import "./button.css";

export default function MainButton({ Size, Color, InsideInput, Content }) {
  const [btnSize, setBtnSize] = useState(Size);
  const [btnColor, setBtnColor] = useState(Color);
  const [btnInsideInput, setBtnSideInput] = useState(InsideInput);

  useEffect(() => {
    // setLight
    if (btnColor == "light") {
      setBtnColor("btn--light");
    } else if (!btnColor) {
      setBtnColor("");
    } else {
      console.log("Props inválida na props btnColor");
      setBtnColor("");
    }

    // setSize
    if (btnSize == "large") {
      setBtnSize("btn--large");
    } else if (btnSize == "tiny") {
      setBtnSize("btn--tiny");
    } else if (!btnSize) {
      setBtnSize("");
    } else {
      console.log("Props inválida na prps btnSize");
      setBtnSize("");
    }

    // setsetBtnInsideInput
    if (btnInsideInput == true) {
      setBtnSideInput("btn--insideInput");
    } else if (!btnInsideInput) {
      setBtnSideInput("");
    } else {
      console.log("Props inválida na props btnInsideInput");
      setBtnSideInput("");
    }
}, []);

  return (
    <>
      <button
        className={`btn ${btnSize} ${btnColor} ${btnInsideInput}`}
      >
        {Content}
      </button>
    </>
  );
}

/* 

    Size          = default/large
    Color        = default/light
    InsideInput  = true/false
    Minimal      = true/false
    content         = string
*/
