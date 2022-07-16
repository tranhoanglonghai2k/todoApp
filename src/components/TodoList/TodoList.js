import { CardContent, Typography } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todoFilters }) {
  // console.log(todoFilters);

  return (
    <div style={{ marginTop: "29px" }}>
      {todoFilters.length === 0 ? (
        <CardContent>
          <Typography
            align="center"
            sx={{ fontSize: 50 }}
            color="text.secondary"
            variant="h1"
            gutterBottom
          >
            List is empty
          </Typography>
        </CardContent>
      ) : (
        todoFilters.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}

export default TodoList;
