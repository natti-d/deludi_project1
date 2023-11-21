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
    
    let obj_conatiner = document.getElementById('objects-div')
    for(let i = 0; i < 6; i++)
    {
        let object_div1 = document.createElement("div");
        object_div1.classList.add("col-md-4", "col-12");
        obj_conatiner.appendChild(object_div1);

        let object_div2 = document.createElement("div");
        object_div2.classList.add("card");
        object_div2.onmouseover = function () {
            object_div2.style.boxShadow = "0 .5rem 1rem #1E4847";
            object_div2.style.borderStyle = "hidden";
            object_div2.style.transitionDuration = "0.75s";
        }
        object_div2.onmouseleave = function () {
            object_div2.style.boxShadow = "none";
            object_div2.borderStyle = "solid";
            object_div2.transitionDuration = "0.75s";
        }
        object_div1.appendChild(object_div2);

        let object_image = document.createElement("img");
        object_image.classList.add("card-img-top", "img-fluid");
        object_image.src = "./image/belogradchik/0.png";
        object_div2.appendChild(object_image);

        let object_div3 = document.createElement("div");
        object_div3.classList.add("card-body");
        object_div3.style.backgroundColor = "#1E4847";
        object_div2.appendChild(object_div3);

        let h4 = document.createElement("h4");
        h4.classList.add("card-title", "text-center", "break-word");
        h4.color = "#FFFFFF";
        h4.innerText = "Name of object";
        object_div3.appendChild(h4);
    }
}