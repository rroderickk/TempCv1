import React from "react";
import "./index.scss";

const TodoForm =({ setOpenModal, date })=> {
const onCancel =()=> setOpenModal(false);

return ( <>
<form>
  <label className="TodoForm-label" onClick={()=>onCancel()}>{date} x</label>

  {/* <textarea 
    className="TodoForm-textarea" 
    placeholder="Lorem Lorem Ipsum Lorem ipsum is placeholder Lorem Lorem Ipsum Lorem ipsum is placeholder Lorem Lorem Ipsum Lorem ipsum is placeholder Lorem Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups" 
  /> */}

  <p>on construction.......reviewing layouts and visual mockups</p>
  <div className="TodoForm-button">
    <button className="TodoForm-button-add" type="button" onClick={onCancel}>Cancelar</button>  
    <button className="TodoForm-button-cancel" type="submit">Añadir</button>  
  </div>
</form>
</> ) }; export default TodoForm ;