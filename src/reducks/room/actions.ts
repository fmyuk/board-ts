export const FETCH_ROOMS = "FETCH_ROOMS";
export const fetchRoomsAction = (rooms) => {
  return {
    type: "FETCH_ROOMS",
    payload: rooms
  }
};

export const DELETE_ROOM = "DELETE_ROOM";
export const deleteRoomAction = (rooms) => {
  return {
    type: "DELETE_ROOM",
    payload: rooms
  }
};