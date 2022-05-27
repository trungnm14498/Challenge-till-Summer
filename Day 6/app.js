var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')
var alert = document.querySelector('.alert')
var result = document.querySelector('.result')

console.log(eKey)
document.addEventListener('keydown', e=>{
    
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerText = e.code

    alert.classList.add('hide')
    document.querySelector('.box').classList.remove('hide')
})