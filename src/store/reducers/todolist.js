import { ADDTODOLIST, DELETETODOLIST, CHECKTODOLIST } from "../types";
const initialState = {
  todolist: []
};

export default function todolistReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTODOLIST:
      return {
        ...state,
        todolist: [...state.todolist, action.payload]
      };
    case DELETETODOLIST:
      return {
        ...state,
        todolist: state.todolist.filter((item) => item.id !== action.payload)
      };
    case CHECKTODOLIST:
      return {
        ...state,
        todolist: state.todolist.map((item) => {
          if (action.payload.id === item.id) {
            item.completada = action.payload.estado;
          }
          return item;
        })
      };
    default:
      return state;
  }
}
