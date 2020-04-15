import request from "@/utils/request";
export function getList(data) {
  return request({
    url: "/article/list",
    method: "post",
    data
  });
}

export function getCategoryList(data) {
  return request({
    url: "/category/list",
    method: "get",
    data
  });
}

export function addArticle(data) {
  return request({
    url: "/article/add",
    method: "post",
    data
  });
}

export function deleteArticle(data) {
  return request({
    url: "/article/del",
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
