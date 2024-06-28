const contra = document.getElementById("contra");
const veri = document.getElementById("vericontra");
const retroa = document.getElementById("demo");

const minusculas = "qwertyuiopasdfghjklñzxcvbnm"
const mayusculas = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
const numeros = "1234567890 "

function leer(caracter) {
    for (let x of contra.value) {
        if (caracter.includes(x)) {
            return true;
        }
    } 
    return false;
}

function especial() {
    for (let x of contra.value) {
        if (!( minusculas.includes(x) || mayusculas.includes(x) || numeros.includes(x) )) {
            return true;    
        }
    }   
    return false;
}

function seguridad() {
    let safe = 0;
    if (contra.value.length > 5) {safe ++;}
    if (contra.value.length > 7) {safe ++;}
    if (contra.value.length > 11) {safe ++;}
    if (leer(minusculas)) {safe ++;}
    if (leer(mayusculas)) {safe ++;}
    if (leer(numeros)) {safe ++;}
    if (especial()) {safe ++;} 
    return safe;
}

function validar(event) {
    if (seguridad() < 6 || contra.value != veri.value) {
        event.preventDefault();
    }
    if (contra.value != veri.value) {
        alert("la contraseña no coincide")
    } else if (contra.value.length < 8) {
        alert("la contraseña debe ser más larga");
    } else if (seguridad() < 6) {
        alert("la contraseña debe contener mayúsculas, minúsculas, números y caracteres especiales");
    } else {
        alert("usuario creado")
    }
}

contra.oninput = function retro() {
    if (seguridad() == 0) {
        retroa.innerHTML = ""
    } else if (seguridad() < 3) {
        retroa.innerHTML = "<div class='debil'> la contraseña es débil </div>";
    } else if (seguridad() < 5) {
        retroa.innerHTML = "<div class='regular'> la contraseña es regular </div>";
    } else if (seguridad() < 6) {
        retroa.innerHTML = "<div class='fuerte'> la contraseña es fuerte </div>";
    } else {
        retroa.innerHTML = "<div class='segura'> la contraseña es segura </div>";
    }
}