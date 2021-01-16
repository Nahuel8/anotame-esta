document.querySelector('#btn-guardar').addEventListener('click', function(){
    
    const nuevaNota = document.querySelector('#ingresar-nota');
    crearNota(nuevaNota.value);
    nuevaNota.value = "";
    
});

function crearNota(contenido){
    if(contenido.trim() !== ""){
        const $container = document.querySelector('.contenedor-notas');
    let $newNote = document.createElement('div');
    $newNote.setAttribute('class', 'nota-nueva');
    $newNote.innerText = contenido;
    $container.appendChild($newNote);
    }
}



