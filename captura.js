let amigos=[];
let btnGuardar=document.querySelector("#btnGuardar");
let btnCancelar=document.querySelector("#btnCancelar");
let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");
pintar();

btnCancelar.addEventListener("click",()=>{
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
    event.preventDefault()
});

function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}

btnGuardar.addEventListener("click",(event)=>{
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let contacto={
        nombre:formulario["Nombre"].value,
        telefono:formulario["Telefono"].value,
        correo:formulario["Correo"].value,
        foto:formulario["Foto"].value
    };
    if(contacto.nombre==""||contacto.telefono==""||contacto.correo==""||contacto.foto==""){
        alert("Llena todos los campos");
    }
    if(formulario["Correo"].value.match(expReg)) 
    {
        alert("Validado");
        amigos.push(contacto);
        limpiar();
        pintar();
        event.preventDefault();

    }
    else{
        alert("Formato de correo incorrecto");
    }

});

function pintar() {
    if (amigos.length > 0) {
        lista.innerHTML = "";
        amigos.forEach((contacto) => {
            let amigo = document.createElement("div");
            amigo.innerHTML = `<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}">Detalles</button>`;
            lista.appendChild(amigo);
        });
        let botones = document.getElementsByClassName("muestraDetalles");
        console.log(botones);
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click", () => {
                showDetails1(element.children[0].value);
            });
        }
    } else {
        lista.innerHTML = "<h2>No tenemos amigos</h2>"
    }
}


function showDetails1(tel){
    let detalles=document.getElementById("detallesAmigo");
    let amigo=amigos.find(a=>
        {
        if(a.telefono==tel)
        {
            return a;
        }
    });
    detalles.innerHTML=`
    <img src="${amigo.foto} alt="">
    <h3>${amigo.nombre}</h3>
    <p><span>Telefono: </span>${amigo.telefono}</p>
    <p><span>Correo: </span>${amigo.correo}</p>
    <button id="cerrarShow">Cerrar</button>`;
    detalles.classList.remove("oculto");
    esconderDetalles();
}
function esconderDetalles(){
    let esconder=document.getElementById("cerrarShow");
    esconder.addEventListener("click", ocultar=>
    {
        let ventana=document.getElementById("detallesAmigo")
        ventana.classList.add("oculto");
    });
}

