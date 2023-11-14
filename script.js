function changeObekti() {
    activating('obekti')
    deactivating('vhod')
    deactivating('registraciq')
    deactivating('karta')  
    
    
    let h1 = document.getElementById('page-name')
    h1.innerText = "Обекти"
}

function changeKarta() {
    activating('karta')
    deactivating('obekti')
    deactivating('registraciq')
    deactivating('vhod')  
}

function changeRegistraciq() {
    activating('registraciq')
    deactivating('obekti')
    deactivating('vhod')
    deactivating('karta')  

}

function changeVhod() {
    activating('vhod')
    deactivating('obekti')
    deactivating('registraciq')
    deactivating('karta')  
}

function activating(btn){
    let a = document.getElementById(btn)
    a.style.color = "#99D19C"
    a.style.borderBlockColor = "#99D19C"
    a.classList.remove("btn-success")
    a.classList.add("btn-outline-success")

    btn += 'Nav'

    let b = document.getElementById(btn)
    b.style.color = "#565656"
    b.style.borderBlockColor = "#565656"
    b.classList.remove("btn-success")
    b.classList.add("btn-outline-success")

}

function deactivating(btn)
{
let a = document.getElementById(btn)
a.style.removeProperty("color")
a.style.borderBlockColor = null
a.classList.add("btn-success")
a.classList.remove("btn-outline-success")

btn += 'Nav'
let b = document.getElementById(btn)
b.style.removeProperty("color")
b.style.removeProperty("border-color")
b.style.borderBlockColor = null
b.classList.add("btn-success")
b.classList.remove("btn-outline-success")

}