import { useContext } from "react";

import { HandleTodos } from "../components/Todos/Todos";

const useGlobalContext = () => {
  return useContext(HandleTodos);
};

export default useGlobalContext;
