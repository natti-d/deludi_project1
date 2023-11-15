function changeObekti() {
    activating('obekti')
    deactivating('vhod')
    deactivating('registraciq')
    deactivating('karta')  
    
    
   
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

    let h1 = document.getElementById('page-name')
    h1.innerText = a.innerText

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

function Load()
{
    
    let b = document.getElementById('objects-div')
    for(let i = 0; i < 3; i++)
    {
        let  a = "<div class='col-md-4 col-12'><div class='card'onmouseover=' this.style.boxShadow = '0 .5rem 1rem #1E4847'; this.style.borderStyle = 'hidden'; this.style.transitionDuration = '0.75s'';'onmouseleave='this.style.boxShadow = 'none'; this.style.borderStyle = 'solid'; this.style.transitionDuration = '0.75s''><img src='' class='card-img-top img-fluid'><div class='card-body' style='background-color: #1E4847'><h4 class='card-title text-center break-word'style='color: #FFF'></h4></div></div></div></div> ";
        b.innerHTML = a;
        console.log(i);
    }
}