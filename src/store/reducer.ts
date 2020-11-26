import { combineReducers } from "redux";
import { reducer as find } from "./modules/find";
import { reducer as mv } from "./modules/mv";
import { reducer as user } from "./modules/user";
import { reducer as player } from "./modules/player";

export interface RootState {
  find: find.FindState;
  mv: mv.MvState;
  user: user.UserState;
  player: player.PlayerState;
}

export default combineReducers({
  find: find.findReducer,
  mv: mv.mvReducer,
  user: user.userReducer,
  player: player.playerReducer,
});
