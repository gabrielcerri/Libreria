//Libreria comunitaria, gente dona libros y éstos se encargan de redistribuirlos
//Para que la librería funcione deben devolverlos

//PRIMERA ACCIÓN: 

//varios libros--->hay que hacer un array de objetos
//Cada libro posee como propiedad:
/*	-titulo
	-autor
	-año de lanzamiento
	-editorial
	-ISBN (International Standard Book Number)
	-estado(D:disponible|ND:noDisponible)

Los lectores pueden alquilar un libro indicando el ISBN del libro

*/

/*Primero, debemos crear un script que permita a los administradores saber si 
un libro esta disponible o no
*/

//Pasos:
//	-Cargar libros
//	-Ver si el ISBN del libro que busca el administrador coincide con alguno de la lista
//	-Ver el estado en el que se encuentra(D|ND)

/*
	-Uso la funcion de buscar el libro que quiero
	-luego le pregunto si libro.estado === D 
	 -return ambas opciones(si esta disponible-->D|sino-->ND)
*/

//Punto N°2: 
/*
	Buscar que libros estan disponibles sobre x autor:
	Lo que debemos hacer:
	 -Recorrer el array de libros
	 -Mostrar todos los libros que tengan === libro.autor independientemente del estado
	  en que este la prop del objeto libro en cuestion(se le informará al lector cual esta
	  disponible(D) y cual no(ND))
*/

//Punto N°3:

/*
	Mostrarle a la administradora cuales son los 10 libros más pedidos:
	Lo que debemos hacer:
	-Cargaremos 12 libros en nuestro scrip tests.js
	-A cada objeto libro le agregaremos una propiedad que se llamara pedido, cuya funcion sera la 
	 de llevar a cabo la cuenta de cuantas veces se pidió X libro.
	 *esto lo haremos agregando en nuestra función buscaLibroXISBN ubicada en utils.js un
	  contador cuya función es que cada vez que la administradora ingrese su búsqueda x ISBN
	  le sume uno a las cantidades que ya tenia dicha propiedad
	-Luego lo ordenamos 
*/


function buscaLibroXAutor(listaDeLibros,autor) {
	let librosDisponiblesAutor = []
	for(let i=0; i<listaDeLibros.length; i++){
		const libro = listaDeLibros[i]
		
		if(libro.autor.includes(autor))	{
			librosDisponiblesAutor.push({
				titulo : libro.titulo,
				estado: libro.estado, 
		})


	}


}

	return librosDisponiblesAutor

}

function librosMasPedidos(listaDeLibros,ISBN) {
	const mejoresLibros = []
	for(let i=0; i<listaDeLibros.length;i++){
		const libro= listaDeLibros[i]
		if(buscaLibroXISBN(listaDeLibros,ISBN)==='D'){
			mejoresLibros.push({
				titulo: libro.titulo,
				autor: libro.autor,
				pedidos: libro.pedidos,
			})
		}
	}

	mejoresLibros.sort(function(a,b){
		return(b.pedidos - a.pedidos)
	})


  mejoresLibros.splice(10)
  return mejoresLibros

}







