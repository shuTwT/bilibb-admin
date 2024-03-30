import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data?: Array<any>;
};

type ResultTable = {
  success: boolean;
  data?: {
    /** 列表数据 */
    list: Array<any>;
    /** 总条目数 */
    total?: number;
    /** 每页显示条目个数 */
    pageSize?: number;
    /** 当前页数 */
    currentPage?: number;
  };
};

/** 获取系统管理-用户管理列表 */
export const getUserList = (params?: object) => {
  return http.request<ResultTable>("get", "/api/system/user", { params });
};

/** 系统管理-用户管理-获取所有角色列表 */
export const getAllRoleList = () => {
  return http.request<Result>("get", "/api/system/list-all-role");
};

/** 系统管理-用户管理-根据userId，获取对应角色id列表（userId：用户id） */
export const getRoleIds = (data?: object) => {
  return http.request<Result>("post", "/api/system/list-role-ids", { data });
};

/** 获取系统管理-角色管理列表 */
export const getRoleList = (params?: object) => {
  return http.request<ResultTable>("get", "/api/system/role", { params });
};

/** 获取系统管理-菜单管理列表 */
export const getMenuList = (params?: object) => {
  return http.request<Result>("get", "/api/system/menu", { params });
};

/** 新增系统管理-菜单 */
export const addMenu = (data?: object) => {
  return http.request<Result>("post", "/api/system/menu", { data });
};

/** 更新系统管理-菜单 */
export const updateMenu = (menuId?: number, data?: object) => {
  return http.request<Result>("put", "/api/system/menu/" + menuId, { data });
};

/** 删除系统管理-菜单 */
export const deleteMenu = (menuId?: number) => {
  return http.request<Result>("delete", "/api/system/menu/" + menuId);
};

/** 获取系统管理-部门管理列表 */
export const getDeptList = (params?: object) => {
  return http.request<Result>("get", "/api/system/dept", { params });
};

/** 获取系统监控-在线用户列表 */
export const getOnlineLogsList = (params?: object) => {
  return http.request<ResultTable>("get", "/api/monitor/online-logs", {
    params
  });
};

export const offlineUser = (id: string, data?: object) => {
  return http.request<Result>("delete", "/api/monitor/offline/" + id, { data });
};

/** 获取系统监控-登录日志列表 */
export const getLoginLogsList = (data?: object) => {
  return http.request<ResultTable>("post", "/api/monitor/login-logs", { data });
};

/** 获取系统监控-操作日志列表 */
export const getOperationLogsList = (data?: object) => {
  return http.request<ResultTable>("post", "/api/monitor/operation-logs", {
    data
  });
};

/** 获取系统监控-系统日志列表 */
export const getSystemLogsList = (data?: object) => {
  return http.request<ResultTable>("post", "/api/monitor/system-logs", {
    data
  });
};

/** 获取系统监控-系统日志-根据 id 查日志详情 */
export const getSystemLogsDetail = (data?: object) => {
  return http.request<Result>("post", "/api/monitor/system-logs-detail", {
    data
  });
};

/** 获取角色管理-权限-菜单权限 */
export const getRoleMenu = (params?: object) => {
  return http.request<Result>("get", "/api/system/role-menu", { params });
};

/** 获取角色管理-权限-菜单权限-根据角色 id 查对应菜单 */
export const getRoleMenuIds = (data?: object) => {
  return http.request<Result>("post", "/api/system/role-menu-ids", { data });
};
