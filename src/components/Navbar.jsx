import React from "react";
import { FaTasks, FaEdit, FaPlus } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";

const Navbar = ({ totalTodos = 0, editing = false }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaTasks />
        <h2>TodoFlow</h2>
      </div>

      <div className={`navbar-status ${editing ? "editing" : "creating"}`}>
        {editing ? (
          <>
            <FaEdit />
            <span>Editing Task</span>
          </>
        ) : (
          <>
            <FaPlus />
            <span>Create Task</span>
          </>
        )}
      </div>

      <div className="navbar-stats">
        <BsListCheck />
        <span>
          {totalTodos} {totalTodos === 1 ? "Task" : "Tasks"}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;