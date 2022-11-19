function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
};

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let videoInicio = document.getElementById("videoInicio");
let divModeSxo = document.getElementsByClassName("modo_sexo")[0];
let patricio = document.getElementById('patricio');
let mamasita = document.getElementById('mamasita');

patricio.style.display = 'none';
function mostrarPatricio(){
    return patricio.style.display = 'block';
}
function reproducirVideoInicio(){
    return videoInicio.play();
}

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('sabia que dirias que si, casemonos ya y tengamos muchos hijos. TE AMOOOOO!!!! ❤💖');
    videoInicio.pause();
    divModeSxo.style.display = 'block';
    btnNo.style.display = 'none';
    videoInicio.style.display= 'none';
    const cancion = new Audio('../audio/modo_setso.mp3');
    cancion.play();
    mamasita.play();
    setTimeout(mostrarPatricio,1500);
});