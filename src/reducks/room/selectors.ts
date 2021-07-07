import { createSelector } from "reselect";

const roomSelector = (state) => state.room;

export const getRooms = createSelector(
  [roomSelector],
  state => state.room
);