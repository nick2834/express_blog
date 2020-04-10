const db = require("../sql/dbConfig");
const tableName = "article";
const moment = require("moment");
// list
exports.list = (req, res, next) => {
  db.base(tableName)
    .select()
    .then(data => {
      console.log(data);
    });
};
// 增加
exports.add = (req, res, next) => {
  const { title, author, description, category_id, content } = req.body;
  db.base(tableName)
    .thenAdd(
      {
        title,
        author,
        description,
        category_id,
        content,
        create_time: moment().format("YYYY-MM-DD HH:mm:ss")
      },
      { title },
      true
    )
    .then(data => {
      console.log(data);
    });
};
// 删除
// 修改
// 查询
exports.getByid = (req,res,next) =>{
    
}
