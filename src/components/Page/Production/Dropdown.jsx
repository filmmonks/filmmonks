import React, { useState } from "react";
import "./Dropdown.css"; // Import the corresponding CSS file

const Dropdown = ({ icon, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(content);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="icon">{icon}</div>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
};

export default Dropdown;
