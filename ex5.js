/**
 * Extiende la función del ex4.
 * 
 * Ahora, también vamos a determinar el agua necesaria en función de la condición física del ciclista. 
 * 
 * Si la condición es 'buena', el ciclista necesita 0.5l por cada km
 * Si la condicion es 'regular', el ciclista necesita 0.6l por cada km
 * Si la condición es 'mala', el ciclista necesita 0.7l por cada km
 */

/** La función está incompleta */

function agua_necesaria(condicion, km) {

    let agua_por_km;    

    if (condicion == 'buena') {
        agua_por_km = 0.5;
    } else if(condicion == 'regular'){
        agua_por_km = 0.61;
    } else if(condicion == 'mala') {
        agua_por_km = 0.71;
    }else{};
   
    return km * agua_por_km;
      
}

litros_necesarios = agua_necesaria('mala', 50);
console.log(`Este ciclista deberia necesitar ${litros_necesarios} litros de agua en total`);