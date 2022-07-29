const ListarUsuarios = () => {
    let Usuarios = JSON.parse(localStorage.getItem('Usuarios')).length > 0 ? JSON.parse(localStorage.getItem('Usuarios')) : document.getElementById('Registrar').click();

    console.log(JSON.parse(localStorage.getItem('Usuarios')).length);
    let Lista = document.getElementById('ListaUsuarios');
    for (let i = 0; i < Usuarios.length; i++) {
        
        Lista.append(EtiquetaLista(Usuarios[i]));
        console.log(Usuarios[i]);
}
}



const BorrarUsuario = (id) => {
    let arreglo = JSON.parse(localStorage.getItem('Usuarios'));
    let NuevoArreglo = arreglo.filter(u => u.Id !== id);

    localStorage.clear();
    localStorage.setItem('Usuarios', JSON.stringify(NuevoArreglo));
    location.reload();


} 

const EtiquetaLista = (Usr) => {
    let Etiqueta = document.createElement('li');
    let Borrar = document.createElement('button');

    Borrar.innerHTML = 'Borrar';
    
    Borrar.addEventListener('click', function() {
        console.log(Usr.Id);
        BorrarUsuario(Usr.Id);
        
    } )

    Etiqueta.innerHTML = Usr.Nombre;
    Etiqueta.append(Borrar);
    return Etiqueta;
}

window.onload = ListarUsuarios;