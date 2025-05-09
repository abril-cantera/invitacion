import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/Dropdown.css";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`dropdown-header ${isOpen ? "open" : ""}`}
      >
        <span className="dropdown-title">{title}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className={`dropdown-body ${isOpen ? "open" : ""}`}>{children}</div>
    </div>
  );
};

export default Dropdown;
