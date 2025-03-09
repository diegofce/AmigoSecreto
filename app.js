// Variables globales
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    // Añadir el nombre a la lista (array)
    listaDeAmigos.push(nombreAmigo);
    
    // Actualizar la lista visual
    actualizarListaVisual();
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Enfocar nuevamente el input para facilitar la entrada de más nombres
    inputAmigo.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaVisual() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigosElement.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya amigos en la lista
    if (listaDeAmigos.length === 0) {
        alert('Debes agregar al menos un amigo para realizar el sorteo');
        return;
    }
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

// Evento para permitir añadir amigos presionando Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
