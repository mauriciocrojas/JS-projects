const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

    const meses = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia} ${mes}, ${anio}`;
    document.getElementById("fecha").innerHTML = fechaTexto;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora = (hora)=>{
    if(hora < 10){
        hora ="0" + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000);


const mostrarRelojUTC = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getUTCHours());
    let min = formatoHora(fecha.getUTCMinutes());
    let seg = formatoHora(fecha.getUTCSeconds());
    document.getElementById("hora2").innerHTML = `${hr}:${min}:${seg}`;

    const meses = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia} ${mes}, ${anio}`;
    document.getElementById("fecha2").innerHTML = fechaTexto;

    document.getElementById("contenedor2").classList.toggle("animar");
}

setInterval(mostrarRelojUTC, 1000);