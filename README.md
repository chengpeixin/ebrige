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

- node &gt;=9.0.0

## Install

```sh
npm install ebrige --save | yarn add ebrige -S
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

brige://getUserInfo?data=JTdCJTdE&callId=getUserInfo1562665696408

- **brige**:协议名
- **getUserInfo**:方法名
- **data**=JTdCJTdE:传递的参数
- **callId**=getUserInfo1562665696408:原生向H5沟通的凭证


##### data

其中，**data**参数是经过**base64**后的**urlencode**过的数据，为json类型,也就是说，原生想要获取其中的参数，需要先解**base64**，在**urldecode**

##### callId

在原生处理完操作后，需要将结果返回给web，这时候想要向web中注入代码来通知web，代码实例为

```javascript
window.$ebrige.callSuccess(callId,1,data)
// callId为凭证,由web向原生传过来，原样返回即可
// 1为执行结果，只要第这个参数不为1，web会认为执行失败。
// data 为原生传递到web的参数，json类型，不需要任何加密和转码。为什么web向原生传需要转码？
```



## 未来计划 

+ [ ] 自定义配置

+ [ ] 长连接

+ [x] 单元测试

## 疑问？

#### 1. 为什么原生向web传递参数需要设置为1
这个参数可以理解为状态码（status），初始值为0，意为未被调用，执行成功为1，方便web在执行错误的情况下处理报错，只要第二个参数不为1，web会认为失败，并执行**catch**中的代码。
status
- 0 未调用
- 1 执行成功
- !==1 执行失败


#### 2. 为什么web向原生传需要转码?
因为**中文字符**在url中传递浏览器会进行转码，而**base64**则是因为原生在解析url参数的时候，参数中可能"="号或者其他的符号，会导致参数截取错误，而原生向web传则没有这种问题



#### 3. 原生不需要向web传递参数，data字段可以不传吗？
可以不传，但**凭证**和**状态码**是必传的(除味直接将webview关闭)
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