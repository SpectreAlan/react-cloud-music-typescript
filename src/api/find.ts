import { httpInstance } from "./axios";

export const getBannerRequest = <T=any>() => {
    return httpInstance.get<T>("/banner?type=2");
};

export const getRecommendRequest = <T=any>() => {
    return httpInstance.get<T>("/personalized?limit=10");
};

export const getTopSongRequest = <T=any>() => {
    return httpInstance.get<T>("/top/song?type=0");
};
