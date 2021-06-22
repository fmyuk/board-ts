import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Room = () => {
  const selector = useSelector(state => state);
  const rooms = getRooms(selector);

  return (
    <section>
      <div>
        {rooms.length > 0 && (
          rooms.map(room => (
            <RoomCard
              key={room.id}
              id={room.id}
              name={room.name}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Room;