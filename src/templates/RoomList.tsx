import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Room from "../components/Room/Room";
import { getRooms } from "../reducks/room/selectors";
import { Rooms } from "../reducks/room/actions";

const RoomList = () => {
  const selector = useSelector((state: Rooms) => state);
  const rooms = getRooms(selector);

  return (
    <section>
      <div>
        {rooms.length > 0 && (
          rooms.map(room => (
            <Room
              id={room.id}
              title={room.title}
              previousText={room.previousText}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default RoomList;