import request from "@/utils/request";
export function getList(data) {
  return request({
    url: "/article/list",
    method: "post",
    data
  });
}

export function getOneByid(data) {
  return request({
    url: `/article/getByid`,
    method: "post",
    data
  });
}
