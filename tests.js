const listaDeLibros = [
	


		/*-Crear un array de objetos con la siguiente estructura:
			libro1:{
				-titulo
				-autor
				-añoDeLanzamiento
				-editorial
				-ISBN
				-estado*/
	{
		titulo:'Ficciones',
		autor:'Jorge L. Borges',
		anioDeLanzamiento:'1944',
		editorial:'Editorial Sur',
		ISBN:'9783161484100',
		estado: 'D',
		pedidos: 4,

	},
	{
		titulo:'Otras Inquisisiones',
		autor:'Jorge L. Borges',
		anioDeLanzamiento:'1943',
		editorial:'Editorial Sur',
		ISBN:'9783161484200',
		estado: 'ND',
		pedidos: 2,

	},

	{
		titulo:'Crimen Y Castigo',
		autor:'Fedor Dostoievski',
		anioDeLanzamiento:'1866',
		editorial:'Gradifco',
		ISBN:'9789871093823',
		estado: 'D',
		pedidos:7,

	},

	{
		titulo:'SPQR',
		autor:'Mary Beard',
		anioDeLanzamiento:'2017',
		editorial:'Critica',
		ISBN:'9789879317891',
		estado: 'ND',
		pedidos:4,
	},
	{
		titulo:'House Of Leaves',
		autor:'Mark Danielewski',
		anioDeLanzamiento:'1920',
		editorial:'Editorial Norte',
		ISBN:'9783161484200',
		estado: 'ND',
		pedidos: 5,

	},
	{
		titulo:'Selter',
		autor:'Anonimo',
		anioDeLanzamiento:'2001',
		editorial:'Otros Editorial',
		ISBN:'9783161444100',
		estado: 'ND',
		pedidos: 6,

	},
	{
		titulo:'House Of Dead',
		autor:'Sega',
		anioDeLanzamiento:'1998',
		editorial:'Konami',
		ISBN:'9783561482200',
		estado: 'D',
		pedidos: 10,

	},
	{
		titulo:'Ficciones',
		autor:'Jorge L. Borges',
		anioDeLanzamiento:'1944',
		editorial:'Editorial Sur',
		ISBN:'9783161484100',
		estado: 'D',
		pedidos: 9,

	},
	{
		titulo:'Antologia Poetica',
		autor:'Luis Cernuda',
		anioDeLanzamiento:'1989',
		editorial:'Mayoria',
		ISBN:'978313456484100',
		estado: 'D',
		pedidos: 1,

	},
	{
		titulo:'Número Cero',
		autor:'Umberto Eco',
		anioDeLanzamiento:'1456',
		editorial:'Kapeluz',
		ISBN:'97835561484100',
		estado: 'D',
		pedidos: 4,

	},
	{
		titulo:'Libreria',
		autor:'Marges',
		anioDeLanzamiento:'2000',
		editorial:'Norte Sur',
		ISBN:'9222161484100',
		estado: 'D',
		pedidos: 8,

	},
	{
		titulo:'Aticos',
		autor:'Jorge',
		anioDeLanzamiento:'1844',
		editorial:'Edi Aur',
		ISBN:'9783161494100',
		estado: 'D',
		pedidos: 12,

	},




]


const estaDisponible = buscaLibroXISBN(listaDeLibros,'9783161484100')

const librosDisponiblesXAutor= buscaLibroXAutor(listaDeLibros,'Jorge L. Borges')

const losMejoresLibros= librosMasPedidos(listaDeLibros)

console.log(librosDisponiblesXAutor)

console.log(estaDisponible)

console.log(losMejoresLibros)
