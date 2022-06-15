import { useEffect, useState } from "react";

import styles from "./button.module.css";

export default function MainButton({
  Value,
  Size,
  Color,
  InsideInput,
  Content,
  handleClick,
}) {
  const [btnSize, setBtnSize] = useState(Size);
  const [btnColor, setBtnColor] = useState(Color);
  const [btnInsideInput, setBtnSideInput] = useState(InsideInput);
  const [btnValue, setValue] = useState(Value);

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

    // setValue
    if (Value != Number) {
      console.log("Value só aceita numero");
    } else {
      return setValue(Value);
    }
  }, []);

  return (
    <>
      <button
        onClick={handleClick}
        value={btnValue}
        className={`btn ${btnSize} ${btnColor} ${btnInsideInput}`}
      >
        {Content}
      </button>
    </>
  );
}

/* 

    Size          =   tiny/large
    Color         =   default/light
    InsideInput   =   true/false
    content       =   string
    Value         =   number
    OnClick       =   f(){}
*/
