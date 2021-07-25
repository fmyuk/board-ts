import { createSelector } from "reselect";
import { Rooms } from "./actions";

const roomSelector = (state: Rooms) => state.room;

export const getRooms = createSelector(
  [roomSelector],
  state => state.roomList
);