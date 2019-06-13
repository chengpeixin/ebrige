import ebrige from './../../src/ebrige'

window.onload = function () {
    const btn: HTMLBodyElement = document.querySelector('.share')
    const btn2: HTMLBodyElement = document.querySelector('.link')
    btn.onclick = function () {
        ebrige.dispatch('getUserData', { name: '辛培铖' }, function (res) {
            console.log('回调调用')
            alert(JSON.stringify(res))
        })
    }
    btn2.onclick = function () {
        ebrige.dispatch('getUserData', { name: '辛培铖' }).then(res => {
            console.log('promise调用')
            alert(JSON.stringify(res))
        }).catch(e => {
            alert(JSON.stringify(e))
        })
    }

}