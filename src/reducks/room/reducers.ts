import * as Actions from "./actions";
import initialState from "../store/initialState";

export const roomReducer = (state = initialState.room, action: Actions.RoomAction) => {
  switch (action.type) {
    case Actions.DELETE_ROOM:
      return {
        ...state,
        rooms: [...action.payload]
      };
    case Actions.FETCH_ROOMS:
      return {
        ...state,
        rooms: [...action.payload]
      };
    default:
      return state;
  }
};