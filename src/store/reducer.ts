import { combineReducers } from "redux";
import { reducer as find } from "./modules/find";
import { reducer as video } from "./modules/video";
import { reducer as user } from "./modules/user";
import { reducer as player } from "./modules/player";

export interface RootState {
  find: find.FindState;
  video: video.VideoState;
  user: user.UserState;
  player: player.PlayerState;
}

export default combineReducers({
  find: find.findReducer,
  video: video.videoReducer,
  user: user.userReducer,
  player: player.playerReducer,
});
