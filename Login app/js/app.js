const mostrarCarga = ()=>{


    let forma = document.forms["forma"];
    let usuario = forma["usuario"];
    let password = forma["password"];

    if(usuario.value == "" || password.value == ""){

        alert("Faltan campos por completar");
    }else{
        document.getElementById("container").style.display = "block";
        document.getElementById("carga").style.display = "block";
    }
}
