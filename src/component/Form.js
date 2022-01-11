import React from "react";

const Form = ({setTextInput}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setTextInput(e.target.value);

    };
    
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form>
            <input onChange={inputTextHandler} type="text" name="todo-input" className="todo-input"/>
            <button className ="todo-button" type ="submit">
            <i className ="fas fa-plus-square"></i>
            </button>
        </form>
    );
}
export default Form;