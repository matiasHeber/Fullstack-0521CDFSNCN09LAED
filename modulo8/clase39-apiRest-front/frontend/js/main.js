window.onload = () => {
  // const app = document.getElementById("root");
  // const container = document.createElement("div");
  // container.setAttribute("class", "container");
  // app.appendChild(container);

  const container = document.querySelector("div.container")

  // Aqui debemos agregar nuestro fetch

  fetch("http://localhost:3031/api/movies/")
  .then(response => response.json())
  .then(peliculas => {
   
      let data = peliculas.data;

      data.forEach((movie) => {
        container.innerHTML += `
        <div class="card">
          <h1>${movie.title}</h1>
          <p>Rating: ${movie.rating}</p>
          ${movie.genre !== null 
            ?
            "<p>Genero: " + movie.genre.name + "</p>"
            :
            null
          }
          <p>Duracion: ${movie.length}</p>
        </div>`

        // const card = document.createElement("div");
        // card.setAttribute("class", "card");

        // const h1 = document.createElement("h1");
        // h1.textContent = movie.title;

        // const p = document.createElement("p");
        // p.textContent = `Rating: ${movie.rating}`;

        // const duracion = document.createElement("p");
        // duracion.textContent = `Duración: ${movie.length}`;

        // container.appendChild(card);

        // card.appendChild(h1);
        // card.appendChild(p);
        // if (movie.genre !== null) {
        //   const genero = document.createElement("p");
        //   genero.textContent = `Genero: ${movie.genre.name}`;
        //   card.appendChild(genero);
        // }
        // card.appendChild(duracion);
      });
  })
  .catch(error => console.log(error))


  /** Codigo que debemos usar para mostrar los datos en el frontend

  */
};
