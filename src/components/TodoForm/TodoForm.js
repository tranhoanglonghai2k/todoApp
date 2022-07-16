import { FormControl, Container, TextField, Button } from "@mui/material";

function TodoForm({ addTodo, text, setText }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="What needs to be done?"
            autoFocus
            required={true}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "5px" }}
          >
            ADD
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default TodoForm;
