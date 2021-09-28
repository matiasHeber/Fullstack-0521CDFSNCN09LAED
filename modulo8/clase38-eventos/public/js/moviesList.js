window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    
    // let modo = confirm('Desea modo oscuro');
    
    // if(modo){
    //     body.style.backgroundColor = '#7f7f7f'
    //     body.classList.add('fondoMoviesList');
    // }

    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';


    /*//     En movies.ejs, modificar el práctico de la clase anterior para que el modo oscuro se
            aplique si el usuario pasa el mouse sobre el logo de Digital House, en la vista del
            listado de películas. */

    document.querySelector('.logoDH').addEventListener('mouseover', ()=>{
        body.style.backgroundColor = '#7f7f7f';
        body.classList.add('fondoMoviesList');
    })



}