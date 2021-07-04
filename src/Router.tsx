import React from "react";
import { Switch, Route } from "react-router";
import { RoomList } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/room"} component={RoomList} />
    </Switch>
  );
};

export default Router;
