import { useState } from "react";

export function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);
  const handleToggle = (v = null) => {
    if (v) {
      setToggle(v);
    } else {
      setToggle((d) => !d);
    }
  };
  return [toggle, handleToggle];
}
export function useSelected(initialValue = {}) {
  const [selected, setSelected] = useState(initialValue);

  const handleSelected = (value) => {
    console.log("render");
    setSelected(value);
  };
  return [selected, handleSelected];
}
