import React, { useState } from "react";

const Input = ({ value }) => {
  const [style, setStyle] = useState(false);
  const [checkedValue, setCheckedValue] = useState(false);

  const changeStyle = () => {
    style ? setStyle(false) : setStyle(true);
    checkedValue ? setCheckedValue(false) : setCheckedValue(true);
  };

  return (
    <div
      onClick={() => {
        changeStyle();
      }}
      className={style ? "flex bg-blue-50 p-2" : "flex p-2 border-b-2  "}
    >
      {checkedValue ? (
        <input type="checkbox" checked />
      ) : (
        <input type="checkbox" />
      )}
      <p className="pl-2">{value}</p>
    </div>
  );
};

export default Input;
