### nodejs express mysql vue 博客

#### node-mysql-promise

node mysql 操作封装类，基于 promise，借鉴 75team 开源项目 thinkjs 中 model 操作，数据库连接使用 node-mysql 的连接池。[node-mysql-promise](https://www.npmjs.com/package/node-mysql-promise "node-mysql-promise")，

#### 建表

```
// 创建用户表
CREATE TABLE `sys_user` (
    `id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
    `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
    `password` varchar(100) DEFAULT NULL COMMENT '密码',
    `email` varchar(100) DEFAULT NULL COMMENT '邮箱',
    `mobile` varchar(100) DEFAULT NULL COMMENT '手机号',
    PRIMARY KEY (`id`),
    UNIQUE KEY `name` (`name`)
  ) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COMMENT='用户管理';
```

```
// 创建分类表
  CREATE TABLE `category` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT '编号',
    `name` varchar(50) NOT NULL COMMENT '分类名称',
    `mainKey` varchar(50) NOT NULL COMMENT '关键字',
    `parentId` int DEFAULT NULL COMMENT '父级id',
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='文章分类';
```

#### 启动

```
//进入后台 启动
//已添加supervisor自动启动后台模式
cd blog/server npm run start
//前端启动
npm run dev
```
