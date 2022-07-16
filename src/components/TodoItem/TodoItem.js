import { useState } from "react";
import {
  Card,
  Typography,
  Container,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import {
  DeleteOutline,
  Edit,
  CheckBoxOutlineBlank,
  CheckBox,
} from "@mui/icons-material";

import useGlobalContext from "../../hooks/useGlobalContext";

function TodoItem({ todo }) {
  const { checkTodo, deleteTodo, editTodo } = useGlobalContext();

  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const todoStyle = todo.isCompleted
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };

  const updateTodo = (id) => {
    editTodo(id, editText);
    setIsEdit(false);
  };

  return (
    <div style={{ margin: "1px" }}>
      <Container>
        <Card variant="outlined" style={{ backgroundColor: "#f5f5f5" }}>
          <Typography variant="h5" component="h2">
            {todo.isCompleted ? (
              <IconButton
                style={{ float: "left" }}
                onClick={() => checkTodo(todo.id)}
              >
                <CheckBox></CheckBox>
              </IconButton>
            ) : (
              <IconButton
                style={{ float: "left" }}
                onClick={() => checkTodo(todo.id)}
              >
                <CheckBoxOutlineBlank></CheckBoxOutlineBlank>
              </IconButton>
            )}
            <div style={{ display: "inline-block" }}>
              {isEdit ? (
                <div>
                  <TextField
                    label="Update"
                    variant="standard"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </Button>
                </div>
              ) : (
                <p style={todoStyle}>{todo.title}</p>
              )}
            </div>
            <IconButton
              style={{ float: "right" }}
              onClick={() => deleteTodo(todo.id)}
            >
              <DeleteOutline style={{ color: "red" }}></DeleteOutline>
            </IconButton>
            <IconButton
              style={{ float: "right" }}
              onClick={() => setIsEdit(true)}
            >
              <Edit style={{ color: "#1974D0" }} />
            </IconButton>
          </Typography>
        </Card>
      </Container>
    </div>
  );
}

export default TodoItem;
