import { useState, createContext, useEffect } from "react";
import axios from "axios";

import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Filter from "../Filter/Filter";

export const HandleTodos = createContext();

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(
          "https://62c7f5378c90491c2caaea61.mockapi.io/todos"
        );

        setTodos(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTodos();
  }, []);

  const [filter, setFilter] = useState("ALL");

  const todoFilters = todos.filter((todo) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !todo.isCompleted;
    if (filter === "DONE") return todo.isCompleted;
  });

  const addTodo = async (text) => {
    try {
      const res = await axios.post(
        "https://62c7f5378c90491c2caaea61.mockapi.io/todos",
        {
          title: text,
          isCompleted: false,
        }
      );
      const newTodos = [...todos, res.data];
      setTodos(newTodos);
    } catch (error) {
      console.log(error.message);
    }
  };

  const checkTodo = async (id) => {
    // try {
    //   const res = await axios.post(
    //     `https://62c7f5378c0491c2caaea61.mockapi.io/todos/${id}`
    //   );

    //   console.log(res.data);
    //   setTodos(
    //     res.data.map((todo) => {
    //       if (todo.id === id) {
    //         todo.isCompleted = !todo.isCompleted;
    //       }

    //       return todo;
    //     })
    //   );
    // } catch (error) {
    //   console.log(error.message);
    // }
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }

        return todo;
      })
    );
  };

  const deleteTodo = async (id) => {
    // try {
    //   await axios.delete(
    //     `https://62c7f5378c0491c2caaea61.mockapi.io/todos/${id}`
    //   );
    //   setTodos(todos.filter((todo) => todo.id !== id));
    // } catch (error) {
    //   console.log(error.message);
    // }

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = async (id, editText) => {
    // try {
    //   const res = await axios.post(
    //     `https://62c7f5378c0491c2caaea61.mockapi.io/todos/${id}`
    //   );

    //   setTodos(
    //     res.data.map((todo) => {
    //       if (todo.id === id) {
    //         todo.title = editText;
    //       }

    //       return todo;
    //     })
    //   );
    // } catch (error) {
    //   console.log(error.message);
    // }
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = editText;
        }

        return todo;
      })
    );

    // console.log(todos);
  };

  const handleFilterChange = (value) => setFilter(value);

  return (
    <HandleTodos.Provider value={{ checkTodo, deleteTodo, editTodo }}>
      <TodoForm addTodo={addTodo} text={text} setText={setText} />
      <Filter handleFilterChange={handleFilterChange} value={filter} />
      <TodoList todos={todos} todoFilters={todoFilters} />
    </HandleTodos.Provider>
  );
};

export default Todos;
