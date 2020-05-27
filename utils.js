function buscaLibroXISBN(listaDeLibros,ISBN) {
	for (let j=0; j<listaDeLibros.length; j++){
		const libro = listaDeLibros[j]
		if((libro.ISBN === ISBN) || (libro.estado==='D')) {
			libro.pedidos += 1
			return libro.estado
			

			} else if (libro.ISBN === ISBN){

			return libro.estado
			}


		}

}
