const mostrarRelog = ()=>{
    let fecha = new Date();
    let hr = formatHora(fecha.getHours());
    let min = formatHora(fecha.getMinutes());
    let sec = formatHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hr}:${min}:${sec}`;

    const meses = [ 'Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio' , 'Julio' , 'Agosto' , 'Septiembre' , 'Octubre' , 'Noviembre' , 'Diciembre'];
    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();
    let fechaTexto = `${diaSemana} |  ${dia} de ${mes} | ${anio}`;

    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatHora = (hora) =>{
    if( hora < 10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarRelog,1000);
