<h1 align="center">Welcome to ebrige 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D6.0.0-blue.svg" />
  <a href="Project documentation url (use empty value to skip)">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
</p>

> 这是一个用于javascript与原生交互的库


### 🏠 [Homepage](https://github.com/chinese-captain/eBrige)

## Prerequisites

- node &gt;=6.0.0

## Install
推荐使用yarn

```sh
npm install ebrige | yarn add ebrige
```

## Usage

```javascript
import Ebrige from 'ebrige'

// Promise调用
// 调用原生方法(传递参数)
Ebrige.dispath('getUser',{token:'token'}).then(res=>{
    // res is native return data
})

// 不传递参数
Ebrige.dispath('getUser').then(res=>{
    // res is native return data
})

// 普通回调调用
//  调用原生方法(传递参数)
Ebrige.dispath('getUser',{token:'token'},res=>{
    // res is native return data
})

// 不传递参数
Ebrige.dispath('getUser',res=>{
    // res is native return data
})
```
## 未来计划 

+ [ ] 自定义多配置

+ [ ] 拦截器 

+ [ ] 长连接

+ [ ] 单元测试


> 原生如何调用？

## Run tests

```sh
# 待全部功能开发完成，写单测
npm run test
```
## Run Demo
```sh
npm run demo
```

## Author

👤 **惜纸**

* Github: [@https://github.com/chengpeixin](chengpeixin)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/chinese-captain/eBrige/issues).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_