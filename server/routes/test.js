var Mysql = require("node-mysql-promise");

const db = Mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "283448189",
  database: "blog"
});

// db.table("sys_user")
//   .where({ name: "god" })
//   .select()
//   .then(data => {
//     console.log(data[0]);
//   });

db.table("sys_user")
  .select()
  .then(data => {
    console.log(data);
  });

router.get("/check", (req, res, next) => {
  let { userToken } = req.query.body;
  let cert = fs.readFileSync(path.resolve(__dirname, "../jwt/jwt_pub.pem"));
});
