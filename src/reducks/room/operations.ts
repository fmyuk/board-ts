import { Dispatch } from "react";
import { fetchRoomsAction, Rooms } from "./actions"

export const fetchRooms = () => {
  return (dispatch: Dispatch<any>, getState: () => Rooms) => {
    const prevRooms = getState().room.roomList;
    const RoomList = [];
    const room = { id: "0", title: "room0", previousText: "sample" }
    prevRooms.forEach(prevRoom => {
      RoomList.push(prevRoom);
    });
    RoomList.push(room);
    dispatch(fetchRoomsAction(RoomList));
  }
};