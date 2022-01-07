const mostrarCarga = ()=>{



    let usuario = document.getElementById("usuario");
    let password = document.getElementById("password")
    if(usuario.value == "" || password.value == ""){

        alert("Faltan campos por completar");
    }else{
        document.getElementById("container").style.display = "block";
        document.getElementById("carga").style.display = "block";
    }
}
