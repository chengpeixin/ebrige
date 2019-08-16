<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 17:53:05
 * @LastEditTime: 2019-08-16 17:53:50
 * @LastEditors: Please set LastEditors
 -->
<h1 align="center">Welcome to ebrige 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D6.0.0-blue.svg" />
  <a href="Project documentation url (use empty value to skip)">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
</p>

> 这是一个用于javascript与原生交互的库 

### 🏠 [Homepage](https://github.com/chengpeixin/ebrige)

## Prerequisites

- IOS &gt;=8.0.0
- android &gt;=4.4

## Install

```sh
npm install ebrige --save
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

// 在vue中使用
Vue.prototype.$ebrige = Ebrige
this.$ebrige.dispatch('getUser',{token:'token'}).then(res=>{
  // res is native return data
})
```
## 如何与原生客户端进行沟通？
在使用过程中，原生(ios和android统称为原生)需要监听浏览器的跳转事件，并截取。
### url样例(跳转的url)

brige://getUserInfo?callId=getUserInfo1562665696408

- **brige**:协议名
- **getUserInfo**:方法名
- **callId**=getUserInfo1562665696408:原生向H5沟通的凭证


##### callId

在原生处理完操作后，需要将结果返回给web，这时候想要向web中注入代码来通知web，代码实例为

```javascript
// 这是在原生进行某些操作(比如获取地理位置)后，操作成功并向前端返回数据，responseData数据格式为JSON
window.$ebrige.callSuccess(callId,responseData)
// 这是在原生进行某些操作(比如获取地理位置)后，操作失败并向前端返回数据，responseData数据格式为JSON
window.$ebrige.callFail(callId,responseData)
```



## 未来计划 

+ [ ] 自定义配置

+ [ ] 长连接

+ [x] 单元测试

## 疑问？

#### 1. 原生不需要向web传递参数，data字段可以不传吗？
可以不传，但**凭证**是必传的(除味直接将webview关闭)
## Run tests

```sh
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

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/chengpeixin/eBrige/issues).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_