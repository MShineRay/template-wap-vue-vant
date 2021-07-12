# 项目名称


## 项目描述

## 项目目录结构
```
./
    ├── README.md
    ├── dist/
    ├── package-lock.json         -- 不建议删除
    ├── package.json              
    ├── public/                   
    ├── src                       -- 源码目录
    ├── babel.config.js           -- babel配置文件 **不允许**私自修改
    └── vue.config.js             -- 配置文件 **不允许**私自修改
```
## 环境
- 配置hosts
```
host文件位置：
mac：sudo vim /etc/hosts

windows：c:\windows\system32\drivers\etc


    #FE localtion  environment
    127.0.0.1 mock.local.fe.cn
    127.0.0.1 dev.local.fe.cn 
    127.0.0.1 test.local.fe.cn
    127.0.0.1 sit.local.fe.cn
    127.0.0.1 uat.local.fe.cn
    127.0.0.1 pre.local.fe.cn 
    
```
- Project setup
  ```
  npm install
  ```
- Compiles and hot-reloads for mock
  ```
  npm run mock
  ```

- Compiles and hot-reloads for development
  ```
  npm run dev
  ```

- Compiles and minifies for production
  ```
  npm run build
  ```

- Run your tests
  ```
  npm run test
  ```

- Lints and fixes files
  ```
  npm run lint
  ```

- 测试环境
    - test
        - 测试地址
        - 测试数据
    - sit
        - 测试地址
        - 测试数据
    - uat
        - 测试地址
        - 测试数据
    - pre
        - 测试地址
        - 测试数据

- 生产环境
    - 地址
    - 数据


## reference
- 需求文档
  - []()
- 原型文档
  - []()
- 接口文档
  - []()
- 项目文档]
  - []()
- 项目规范
  - [css](./doc/css.md)
  - [js](./doc/js.md)
  - [CommitLint](./doc/CommitLint.md)
  - [vant](./doc/vant.md)
- 重要的信息


## 相关人员
- 前端
- 后端
- UI
- 测试
- 产品
- 运维
- 客户端
    - android
    - ios

## 上线记录
发布版本 | 上线功能 | 上线时间 |负责人
---|---|---|---
1.0.1  | 模块、bug、功能描述 | 2021-02-24 | xxx
1.0.0  | 模块、bug、功能描述 | 2021-02-02 | xxx

## TODO
- 1、将test组建抽离出来，避免被打包
- 2、将相关lib，以node_modules方式发布、引入
    - feAxios
    - feTools
      - 基于 lodash进行扩展，支持 tree-shaking
      - 支持 配置化打包 参考element-ui
    - feConfig
    - feLog
    - feMockServer
        - 解析mock
        - 生成mock文件
    - feProxy
    - feDebugger
        - 基于 vconsole 进行扩展，结合 feLog，将错误信息发送到 node服务，方便排查
        -
- 3、支持使用feCli的方式，升级单功能文件
    - feAxios
    - feTools
- 4、公共的css文件
    - reset.css
    - base.css
    - mixins.css
- 5、公共的js

- 6、梳理相关规范
    - css
    - js
    - git
    - code review
    
## Q&A
- Q1、问题描述
    - A1、解决方案
- Q2、问题描述
    - A2、解决方案
