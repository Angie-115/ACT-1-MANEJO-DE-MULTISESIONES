
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value; // Obtenemos el rol del usuario
    let errorMsg = '';

    if (email === '') {
        errorMsg += 'El campo de email es obligatorio.\n';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errorMsg += 'Por favor, ingrese un email válido.\n';
    }
    
    if (password === '') {
        errorMsg += 'El campo de contraseña es obligatorio.\n';
    }
    
    if (errorMsg !== '') {
        document.getElementById('error-message').innerText = errorMsg;
        return false;
    }

    // Crear el objeto usuario con el rol
    const user = {
        email: email,
        role: role
    };
    
    // Guardar el usuario en el almacenamiento local (simulando una sesión)
    localStorage.setItem('user', JSON.stringify(user));

    // Redirigir según el rol
    if (role === 'admin') {
        window.location.href = "admin.html";
    } else {
        window.location.href = "index.html";
    }
    
    return false;
}
