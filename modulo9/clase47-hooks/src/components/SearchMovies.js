import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import noPoster from '../assets/images/no-poster.jpg';



// ● Mostrar y renderizar las películas que vengan de la API en el componente.

function SearchMovies(){
	const apiKey = '90e1af84';
	// ● Usar setState para crear un estado movies con un array vacío como valor inicial y
	// también su respectiva función para actualizar: setMovies.
	const [ movies, setMovies ] = useState([]);

	// Guardar el contenido del input de busqueda
	const [ search, setSearch ] = useState('action');

	const [ error, setError ] = useState(false); // error = false

	// ● Usar useEffect para hacer un llamado asincrónico a la API recién se monte el
	// componente. La URL a donde deberemos hacer el pedido será esta:
	// http://www.omdbapi.com/?s=KEYWORD&apikey=APIKEY
	// (recordemos poner nuestra API Key y, como keyword, podemos probar con la
	// palabra action)
	
	useEffect(()=>{
		//Con funcion tradicional
		// async function fetchData(){
		// 	let resultados = await axios.get(`http://www.omdbapi.com/?s=action&apikey=90e1af84`);
		// 	console.log(resultados);
		// }

		// Con funcion arrow declarada
		const fetchData = async () => {
			let resultados = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);
			//Actualizo el estado de "movies" con las pelis que llegaron de la consulta
			setMovies(resultados.data.Search);
		}

		fetchData();
	}, [])


	const guardarValorInput = e => {
		setSearch(e.target.value);
	}

	const nuevaBusqueda = async e => {
		e.preventDefault();
		let resultados = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);
		console.log(resultados);
		if(resultados.data.Response === "True"){
			setMovies(resultados.data.Search);
		}else{
			setError(true);
		}
	}

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET"
								onSubmit={nuevaBusqueda}
							>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control"
										onChange={guardarValorInput}
									/>
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {search}</h2>
						</div>
						{/* Listado de películas */}
						{
							error === false ? movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
							:
							<div className="alert alert-warning text-center">No se encontraron películas</div>
						}
					</div>
					
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
