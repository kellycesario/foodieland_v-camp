import { useEffect, useState } from "react";

import styles from "./style.module.css";

export default function MainButton({
  Value,
  Size,
  Color,
  InsideInput,
  Content,
  handleClick,
  Type,
}) {
  const [btnSize, setBtnSize] = useState(Size);
  const [btnColor, setBtnColor] = useState(Color);
  const [btnInsideInput, setBtnSideInput] = useState(InsideInput);
  const [btnValue, setValue] = useState(Value);
  const [btnType, setBtnType] = useState(Type);

  useEffect(() => {
    // setLight
    if (btnColor == "light") {
      setBtnColor("btn--light");
    } else if (!btnColor) {
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

    if (btnType === "rounded") {
      setBtnType("btn--rounded");
    } else if (!btnType) {
      setBtnType("");
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
        className={`
        ${styles.btn} 
        ${styles[`${btnSize}`]} 
        ${styles[`${btnColor}`]}
        ${styles[`${btnType}`]}
        ${styles[`${btnInsideInput}`]}
        `}
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
