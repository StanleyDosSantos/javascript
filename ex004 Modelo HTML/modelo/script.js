function carregar() {
    var msg = window.document.getElementById('msg');

    var img = window.document.getElementById('imagem');

    var data = new Date();

    var hora = data.getHours();
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'manha3.jpg';
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde3.jpg';
    } else {
        img.src = 'noite3.jpg'
    }

}