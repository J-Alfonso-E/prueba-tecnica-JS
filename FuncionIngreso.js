document.getElementById('Ingresar').addEventListener('click', function() {
    console.log(document.getElementById('email').value);
    VerificarUsuario();
});

const VerificarUsuario = () => {
    console.log('Entro al metodo');
    let Usuarios = JSON.parse(localStorage.getItem('Usuarios')) ? JSON.parse(localStorage.getItem('Usuarios')) : [];

    let Correo = document.getElementById('email').value.trim();

    if(Correo.length > 0) {
        console.log(Correo);
    console.log(Usuarios);

    if(Usuarios.length > 0  && Usuarios.find(element => element.Email === Correo)) {
        document.getElementById('Eliminar').click();
        //console.log(Usuarios.find(element => element.Email === Correo));
    }
    else{
        document.getElementById('Registrar').click();
    }
    
    }
    
}
