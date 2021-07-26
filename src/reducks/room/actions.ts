export type Room = {
  id: string,
  title: string,
  previousText: string
};

export type Rooms = {
  room: {
    roomList: Room[]
  }
};

export const FETCH_ROOMS = "FETCH_ROOMS";
export const fetchRoomsAction = (rooms: Room[]) => {
  return {
    type: "FETCH_ROOMS",
    payload: rooms
  }
};

export const DELETE_ROOM = "DELETE_ROOM";
export const deleteRoomAction = (rooms: Room[]) => {
  return {
    type: "DELETE_ROOM",
    payload: rooms
  }
};

export type RoomAction =
  | ReturnType<typeof fetchRoomsAction>
  | ReturnType<typeof deleteRoomAction>