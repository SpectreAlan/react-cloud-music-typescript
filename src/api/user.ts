import {httpInstance} from "./axios";

export const loginRequest = <T = any>(param: any) => {
  return httpInstance.post<T>("/login/cellphone", param);
};

export const getRecordRequest = <T = any>(uid: number) => {
  return httpInstance.get<T>("/user/record?type=0&uid=" + uid);
};

export const getCollectRequest = <T = any>(uid: number) => {
  return httpInstance.get<T>("/user/playlist?uid=" + uid);
};

export const getDailyRecommendationRequest = <T = any>() => {
  return httpInstance.get<T>("/recommend/songs");
};


