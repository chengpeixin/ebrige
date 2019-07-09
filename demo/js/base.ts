// import ebrige from 'ebrige'
import ebrige from './../../src/ebrige'

window.onload = function () {
    const btn2: HTMLBodyElement = document.querySelector('.link')
    btn2.onclick = function () {
        ebrige.dispatch('getUserInfo').then(res => {
            alert(JSON.stringify(res))
        }).catch(e => {
          console.log(e)
        })
    }
}
