import { ADDTODOLIST, DELETETODOLIST, CHECKTODOLIST } from "../types";

export function addAction(newItem) {
  console.log(newItem);
  return async (dispatch) => {
    dispatch({
      type: ADDTODOLIST,
      payload: newItem
    });
  };
}
export function deleteAction(id) {
  return async (dispatch) => {
    dispatch({
      type: DELETETODOLIST,
      payload: id
    });
  };
}
export function changeAction(id, estado) {
  return async (dispatch) => {
    dispatch({
      type: CHECKTODOLIST,
      payload: { id, estado }
    });
  };
}
