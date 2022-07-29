const GuardarNuevoUsuario = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('Apellidos').value;
    const email = document.getElementById('email').value;
    const cel = document.getElementById('celular').value;

    if(nombre.trim().length > 0 && apellidos.trim().length > 0 && cel.trim().length > 0 && email.trim().length > 0){
        const Usr = {
            Id: Date.now(),
            Nombre: nombre,
            Apellidos: apellidos,
            Email: email,
            Cel: cel,
        };
    
        //localStorage.setItem('Usuarios', JSON.stringify([Usr]));
        let Usuarios = JSON.parse(localStorage.getItem('Usuarios')) ? JSON.parse(localStorage.getItem('Usuarios')) : [];
        console.log(Usuarios);
        Usuarios.push(Usr);
    
        localStorage.clear();
        localStorage.setItem('Usuarios', JSON.stringify(Usuarios));
    
        console.log(Usuarios);
    
        document.getElementById('Eliminar').click();
    }

    
}

document.getElementById('GuardarDatos').addEventListener('click', function(e) {
    GuardarNuevoUsuario(e);

} );

document.getElementById('email').addEventListener('onChange', function(e) {
    console.log(document.getElementById('email').value);
});
