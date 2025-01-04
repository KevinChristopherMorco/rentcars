import { useState } from "react";

const useToggleHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, handleMenuToggle };
};

export default useToggleHamburger;
