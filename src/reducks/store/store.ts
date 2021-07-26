import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
import { connectRouter, routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { roomReducer } from "../room/reducers";

export default function createStore(history: ReturnType<typeof createBrowserHistory>) {
  return reduxCreateStore(
    combineReducers({
      rooms: roomReducer,
      router: connectRouter(history)
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  );
}
