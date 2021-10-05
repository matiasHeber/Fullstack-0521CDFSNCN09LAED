window.onload = () => {
    let query = new URLSearchParams(location.search);
    const title = document.querySelector('#title');
    const rating = document.querySelector('#rating');
    const awards = document.querySelector('#awards');
    const release_date = document.querySelector('#release_date');
    const length = document.querySelector('#length');

    if (query.has("id")) {
        let id = query.get("id");
        fetch(`http://localhost:3031/api/movies/${id}`)
        .then(response => response.json())
        .then(pelicula => {
            console.log(pelicula);
            //MANEJAR LOS DATOS


            title.value = pelicula.data.title;
            rating.value = pelicula.data.rating;
            awards.value = pelicula.data.awards;

            let date = pelicula.data.release_date.split('T')[0];
            release_date.value = date;
            length.value = pelicula.data.length;
            
        })
        .catch(error => console.log(error))



        document.querySelector('#botonEditar').addEventListener('click', (e)=>{
            e.preventDefault(); // Detener el envio por default del formulario

            fetch(`http://localhost:3031/api/movies/update/${id}`, {
                method: "PUT",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title.value,
                    rating: rating.value,
                    awards: awards.value,
                    release_date: release_date.value,
                    length: length.value,
                })
            })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error))
        })
    }


}