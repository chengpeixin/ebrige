import ebrige from './../../src/ebrige'

window.onload = function () {
    const btn: HTMLBodyElement = document.querySelector('.share')
    btn.onclick = function () {
        ebrige.dispatch('getUserData', { name: '辛培铖' }, function () {
            console.log(21321321)
        })
    }

}