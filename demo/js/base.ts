/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 11:21:11
 * @LastEditTime: 2019-08-16 17:12:31
 * @LastEditors: Please set LastEditors
 */
// import ebrige from 'ebrige'
import ebrige from './../../src/ebrige'
window.onload = function () {
    const btn2: HTMLBodyElement = document.querySelector('.link')
    btn2.onclick = function () {
        ebrige.dispatch('getUserInfo',{name:'帅'}).then(res => {
            alert(JSON.stringify(res))
        }).catch(e => {
          console.log(e)
        })
    }
}
