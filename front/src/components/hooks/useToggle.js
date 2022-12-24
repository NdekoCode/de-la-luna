import { useState } from "react";

export function useToggle() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((d) => !d);
  };
  return [toggle, handleToggle];
}
