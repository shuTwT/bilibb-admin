import { http } from "@/utils/http";

type Result = {
  code?: number;
  success?: boolean;
  data?: any;
};

type ConnectResult = {
  success: boolean;
  data?: any[];
};

type DanmuResult = {
  success: boolean;
  data?: {
    /** 列表数据 */
    list: Array<any>;
  };
};

/** 连接列表 */
export const getConnectList = (params?: object) => {
  return http.request<ConnectResult>("get", "/api/v1/connect/list", { params });
};

/** 新增连接 */
export const addConnect = (data?: object) => {
  return http.request<Result>("post", "/api/v1/connect/add", { data });
};

/** 删除列表 */
export const removeConnect = (roomId: number | string) => {
  return http.request<Result>("post", "/api/v1/connect/remove/" + roomId);
};

/** 弹幕列表 */
export const getDanmuList = (params?: object) => {
  return http.request<DanmuResult>("get", "/api/v1/danmu/list", { params });
};

/** 房间弹幕列表 */
export const getRoomDanmuList = (
  roomId: number | string | string[],
  params?: object
) => {
  return http.request<DanmuResult>("get", "/api/v1/danmu/list/" + roomId, {
    params
  });
};

/** 直播历史列表 */
export const getLiveList = (params?: object) => {
  return http.request<Result>("get", "/api/v1/live/list", { params });
};

/** 直播设置 */
export const getLiveOption = (params?: object) => {
  return http.request<Result>("get", "/api/v1/options/all", { params });
};

/** 保存直播设置*/
export const saveLiveOption = (data?: object) => {
  return http.request<Result>("post", "/api/v1/options/save", { data });
};

export const getRoomList = (params?: object) => {
  return http.request<Result>("get", "/api/v1/room/list", { params });
};

export const getUserList = (params?: object) => {
  return http.request<Result>("get", "/api/v1/user/list", { params });
};
export const getUserInfo = (userId: string | number, params?: object) => {
  return http.request<Result>("get", "/api/v1/user/info/" + userId, { params });
};
export const getUserInfoRoom = (
  userId: string | number,
  roomId,
  params?: object
) => {
  return http.request<Result>(
    "get",
    "/api/v1/user/info/" + userId + "/" + roomId,
    { params }
  );
};

export const getUsersLogs = (params?: object) => {
  return http.request<Result>("get", "/api/v1/user/logs", { params });
};

export const getUserLogs = (userId: string | number, params?: object) => {
  return http.request<Result>("get", "/api/v1/user/logs/" + userId, { params });
};

export const refreshLargeScreenData = (params?: object) => {
  return http.request<Result>("get", "/api/v1/large-screen/data", { params });
};
