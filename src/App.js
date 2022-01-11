import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import './App.css';
import './index.css';
import Header from './component/Header';
import Form from './component/Form';
import TodoList from './component/TodoList';

const App = () => {
    const [TextInput, setTextInput] = useState('');
    const [Todos, setTodos] = useState([]);

    return <div className="App">
        <h1>
            <Header name='Mohi' />
        </h1>
        <Form setTextInput={setTextInput} setTodos={setTodos} Todos={Todos} />
        <TodoList />
    </div>;

};
export default App;