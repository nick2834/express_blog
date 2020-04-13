const db = require("../sql/dbConfig");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
exports.login = (req, res, next) => {
  const { username, password } = req.body;
  let cert = fs.readFileSync(path.resolve(__dirname, "../jwt/jwt.pem"));
  db.base("sys_user")
    .where({ name: username, password })
    .select()
    .then((data) => {
      if (data.length == 0) {
        res.json({
          status: "1",
          msg: "无此结果",
          result: "",
        });
      } else {
        let userToken = jwt.sign(
          {
            id: data[0].password,
            username: data[0].name,
          },
          cert,
          {
            algorithm: "RS256",
            expiresIn: "15min",
          }
        );
        let result = {token:userToken}
        res.json({
          status: "0",
          msg: "登录成功",
          result: Object.assign(result,data[0])
        });
      }
    });
};

exports.register = (req, res, next) => {
  const { username, password } = req.body;
  db.base("sys_user")
    .where({ name: username, password })
    .select()
    .then((data) => {
      if (data.length == 0) {
        db.base("sys_user")
          .add({ name: username, password })
          .then((data) => {
            res.json({
              status: "0",
              msg: "注册成功",
              result: null,
            });
          });
      } else {
        res.json({
          status: "1",
          msg: "该用户已存在",
          result: null,
        });
      }
    });
};
