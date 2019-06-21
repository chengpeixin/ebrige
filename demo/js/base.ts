import ebrige from 'ebrige'

window.onload = function () {
    // const btn: HTMLBodyElement = document.querySelector('.share')
    const btn2: HTMLBodyElement = document.querySelector('.link')
    btn2.onclick = function () {
        ebrige.dispatch('getUserInfo').then(res => {
            alert(JSON.stringify(res))
        }).catch(e => {

        })
    }
}