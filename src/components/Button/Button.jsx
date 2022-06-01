import { useEffect, useState } from "react";

import "./button.css";

export default function Button({
  Size,
  Color,
  InsideInput,
  Minimal,
  Content,
}) {
  const [btnSize, setBtnSize] = useState(Size);
  const [btnColor, setBtnColor] = useState(Color);
  const [btnInsideInput, setBtnSideInput] = useState(InsideInput);
  const [btnMinimal, setBtnMinimal] = useState(Minimal);

  useEffect(() => {
    // setLight
    if (btnColor == "light") {
      setBtnColor("btn--light");
    } else {
      console.log("Props inválida na props btnColor");
      setBtnColor("");
    }

    // setSize
    if (btnSize == "large") {
      setBtnSize("btn--large");
    } else {
      console.log("Props inválida na prps btnSize");
      setBtnSize("");
    }

    // setsetBtnInsideInput
    if (btnInsideInput == "true") {
      setBtnSideInput("btn--insideInput");
    } else {
      console.log("Props inválida na props btnInsideInput");
      setBtnSideInput("");
    }

    // setBtnMinimal
    if (btnMinimal == "true") {
      setBtnMinimal("btn__minimal");
    } else {
      console.log("Props inválida na props btn__minimal");
      setBtnMinimal("");
    }
  }, []);

    return (
      <>
        <button className={'btn '+[btnSize+ btnColor+ btnInsideInput+ btnMinimal]}>
          {Content}
        </button>
      </>
    );
  }

/* 
   btnSize          = default/large
    btnColor        = default/light
    btnInsideInput  = true/false
    btnMinimal      = true/false
    content         = string
*/
