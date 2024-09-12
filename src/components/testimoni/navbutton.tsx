// components/NavigationButtons.tsx
"use client";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

const NavButtons = ({ onPrev, onNext }: NavigationButtonsProps) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <button
        title="Previous"
        onClick={onPrev}
        className="p-2 text-primary"
      >
        <FaArrowLeftLong />
      </button>
      <button
        title="Next"
        onClick={onNext}
        className="p-2 text-primary"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default NavButtons;