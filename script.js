function cambiarImagen() {
    var img = document.getElementById('imgToChange');
    if (img.src.includes('presiona-para-comenzar.png')) {
        img.src = 'img/hola-como-estas.png';
    } else if (img.src.includes('img/hola-como-estas.png')) {
        img.src = 'img/soy-un-asistente-virtual.png';
    } else if (img.src.includes('img/soy-un-asistente-virtual.png')) {
        img.src = 'img/pero-que-es-un-asistente-virtual.png';
    } else if (img.src.includes('pero-que-es-un-asistente-virtual.png')) {
        window.location.href = 'popup00.html';
    }   
}

window.onload = function() {
    var img = document.getElementById('imgToChange');
    img.onclick = cambiarImagen;
};
