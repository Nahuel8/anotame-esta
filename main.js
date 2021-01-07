document.querySelector('#btn-guardar').addEventListener('click', function(){
    crearNota(ObtenerNota());
    document.querySelector('#inp-nota').value = "";
});

function ObtenerNota(){
    const $nota = document.querySelector('#inp-nota').value;
    
    return $nota;
}

function crearNota(contenido){
    const $container = document.querySelector('.contenedor-notas');
    let $newNote = document.createElement('div');
    $newNote.setAttribute('id', 'nuevaNota');
    $newNote.innerText = contenido;
    $container.appendChild($newNote);
}

