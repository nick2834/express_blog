const db = require("../sql/dbConfig");
const tableName = "article";
const moment = require("moment");
// list
exports.list = (req, res, next) => {
  const { pageSize, pageIndex, data } = req.body;
  db.base(tableName)
    .page(Number(pageIndex), Number(pageSize))
    .where(data)
    // .where({ category_id: 3 })
    .countSelect()
    .then(data => {
      res.json({
        status: "0",
        msg: "获取列表成功",
        result: data
      });
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
      console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
      res.json({});
    });
};
// 删除
// 修改
// 查询
exports.getByid = (req, res, next) => {
  const { id, category_id } = req.body;
  db.base(tableName)
    .join(`category on article.category_id = category.cid`)
    .select()
    .then(data => {
      if (data.length > 0) {
        let result = data.filter(item => item.id == id);
        res.json({
          status: "0",
          result: result[0]
        });
      } else {
        res.json({
          status: "1",
          result: null
        });
      }
    });
};
