import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAction,
  deleteAction,
  changeAction
} from "./store/actions/todolistActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todolist.todolist);
  console.log("items");
  console.log(items);
  const [valor, setValor] = useState("");
  const addItem = (e) => {
    dispatch(addAction({ id: Date.now(), value: valor, completada: false }));
  };
  const deleteItem = (e, id) => {
    dispatch(deleteAction(id));
  };
  const onChangeItem = (e, id) => {
    console.log(e.target.checked);
    const estado = e.target.checked;
    dispatch(changeAction(id, estado));
  };
  return (
    <>
      <h1 className="Title">To-DO List</h1>
      <Container fixed className="containerHeader">
        <TextField
          id="outlined-required"
          label="Task"
          defaultValue="New Task"
          variant="standard"
          value={valor}
          onChange={(e) => {
            setValor(e.target.value);
          }}
        />
        <Button
          color="success"
          className="addButton"
          variant="contained"
          onClick={addItem}
        >
          Add
        </Button>
      </Container>
      {items.length > 0 ? (
        items.map((item, index) => (
          <>
            <Grid container spacing={0.5} key={index} className="stackClass">
              <Grid item xs={2} className="checkItem">
                <Checkbox
                  {...label}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  onChange={(e) => onChangeItem(e, item.id)}
                  checked={item.completada}
                />
              </Grid>
              <Grid item xs={6} className="itemName">
                <h1 style={{textDecoration: item.completada ? "line-through":"none" }}>{item.value}</h1>
              </Grid>
              <Grid item xs={4} className="deleteButton">
                <Button
                  color="error"
                  variant="contained"
                  onClick={(e) => deleteItem(e, item.id)}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </>
        ))
      ) : (
        <h1 className="containerHeader">Add a new task</h1>
      )}
    </>
  );
};
export default TodoList;
