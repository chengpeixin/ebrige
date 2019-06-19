import ebrige from './../../src/ebrige'

window.onload = function () {
    // const btn: HTMLBodyElement = document.querySelector('.share')
    const btn2: HTMLBodyElement = document.querySelector('.link')
    btn2.onclick = function () {
        ebrige.dispatch('getName').then(res => {
            console.log('promise调用')
            alert(JSON.stringify(res))
        }).catch(e => {
            alert(JSON.stringify(e))
        })
    }
}