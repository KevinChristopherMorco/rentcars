import { useState } from "react";

const useToggleHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelayed, setDelayed] = useState(false);

  const handleMenuToggle = () => {
    if (isOpen) {
      setDelayed(true);
      setTimeout(() => {
        setIsOpen(false);
        setDelayed(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return { isOpen, isDelayed, handleMenuToggle };
};

export default useToggleHamburger;
