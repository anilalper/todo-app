import React from "react";
import "./TodoItem.css";


function Todo(props) {
  let { content,done,id } = props;
  const click = (e) =>{
    debugger;
    done=!(done);
    if(e.target.tagName !== "BUTTON")
      e.target.firstChild.classList.toggle("line-through");
   }
   return (
    <div className="d-flex" onClick = {click}>
      <div  className={"my-auto mr-auto"+(done?'through':'')}>{content}</div> 
      <button className = "btn btn-danger" value={id} onClick={props.removeTodo}>Sil </button>       
    </div>);
  }
  
export default Todo;
