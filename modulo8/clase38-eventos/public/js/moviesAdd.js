window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//     En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
// 'AGREGAR PELÍCULA', este cambie su color.
    titulo.addEventListener('mouseover',  () => { // this === titulo  ----> false
        titulo.style.color = 'lightblue';
    })

    titulo.addEventListener('mouseover',  function() { // this === titulo  ----> true
        this.style.color = 'lightblue';
    })


    // ESTADO SECRETO
    let estadoSecreto = 0;
    document.querySelector('#titulo').addEventListener('keypress', function (e) {
        switch (estadoSecreto) {
            case 0:
                e.key === 's' ? estadoSecreto++ : '';
                console.log('Estado Secreto: '+estadoSecreto, 'Tecla presionada: ' + e.key); 
                break;
            case 1:
                e.key === 'e' ? estadoSecreto++ : estadoSecreto = 0;
                console.log('Estado Secreto: '+estadoSecreto, 'Tecla presionada: ' + e.key);  
                break;
            case 2:
                e.key === 'c' ? estadoSecreto++ : estadoSecreto = 0;
                console.log('Estado Secreto: '+estadoSecreto, 'Tecla presionada: ' + e.key);  
                break;
            case 3:
                e.key === 'r' ? estadoSecreto++ : estadoSecreto = 0;
                console.log('Estado Secreto: '+estadoSecreto, 'Tecla presionada: ' + e.key);  
                break;
            case 4:
                e.key === 'e' ? estadoSecreto++ : estadoSecreto = 0;
                console.log('Estado Secreto: '+estadoSecreto, 'Tecla presionada: ' + e.key);  
                break;
            case 5:
                e.key === 't' ? estadoSecreto++ : estadoSecreto = 0;
                console.log('Estado Secreto: '+estadoSecreto, 'Tecla presionada: ' + e.key);  
                break;
            case 6:

                if (e.key === 'o') {
                    alert('SECRETO MAGICO');
                    estadoSecreto = 0;
                }else{
                    estadoSecreto = 0;
                }

                break;
        }

        // POCO PERFORMANTE -> IF
        // if (e.key === 's' && estadoSecreto === 0) {
        //     estadoSecreto++;
        // } else if(e.key === 'e' && estadoSecreto === 1){
        //     estadoSecreto++;
        // } else if(){
        // } else if(){
        // } else if(){
        // } else if(){
            
        // }
    })

}