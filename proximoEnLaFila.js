function proximoEnLaFila(fila, nuevoElemento) {
    let eliminado = fila[0];
    fila.push(nuevoElemento);
    fila.shift();
    return eliminado;
}

let cola = [1, 2, 3, 4, 5];
console.log(proximoEnLaFila(cola, 6));
console.log(cola);