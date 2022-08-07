import React from "react";
import "./copyColor.css";
import { useRecoilState } from "recoil";
import { copyTrigerAtom } from "../../../atoms/FlatUiColor/copyTrigerAtom";
const CopyColor = ({ copyTheColor }) => {
  const [copyTriger] = useRecoilState(copyTrigerAtom);
  const opacityVal = copyTriger ? 1 : 0;
  const scaleVal = copyTriger ? "scale(1)" : "scale(1.2)";
  return (
    <div
      className="copycolor"
      style={{ backgroundColor: copyTheColor, opacity: opacityVal }}
    >
      <div className="data" style={{ transform: scaleVal }}>
        <h2 style={{ textShadow: `2px 2px ${copyTheColor}` }}>کپی شد!</h2>
        <p>{copyTheColor}</p>
      </div>
    </div>
  );
};

export default CopyColor;
