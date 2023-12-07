import React from "react";

const ListItems = (Props) => {
  return (
    <>
    <li className="todo-items">
    <span>
        <input type="checkbox" /> 
        <span>
        {Props.text}
     </span>
     </span>
   
      <p>..</p>
     
      </li>
    </>
  );
};

export default ListItems;
