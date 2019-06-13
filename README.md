# Javascript与native相互调用brige库

只需引入该库，在需要调用原生方法的时候如下调用即可

### Usage
```javascript
import ebrige from 'ebrige'
ebrige.dispatch('getUserData', { name: '鸭子' }, function () {
    console.log(21321321)
})
```

### 文档

ebrige.dispatch(方法名,需要传递的参数(没有参数可省略) ,回调) 