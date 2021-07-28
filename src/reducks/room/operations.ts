import { fetchRoomsAction } from "./actions"

export const fetch = () => {
  return (dispatch, getState) => {
    const prevRooms = getState().rooms.roomList;
    const RoomList = [];
    const room = { id = 0, title = "room0", previousText = "sample" }
    RoomList.push(room);
    RoomList.push(prevRooms);
    dispatch(fetchRoomsAction(RoomList));
  }
}