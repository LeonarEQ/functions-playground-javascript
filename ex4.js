/**
 * El ciclista 
 * 
 * Queremos implementar una función que calcule, en función de los quilómetros que el ciclista queire recorrer, cuantos litros de agua necesita
 * 
 * Sabemos que para recorrer 1km, necesita 0.5 litros.
 * 
 * Implementa una función que devuelva un numero real con la cantidad de litros de agua que necesita el ciclista para recorrer 'km' kilómetros.
 */

 function agua_necesaria(km) {
    let litros_agua = km * 0.5;
    return litros_agua;
 }

 let agua_caso_uno = agua_necesaria(5);
 console.log(`Para recorrer 5km , el ciclista necesitaria ${agua_caso_uno} litros de agua`);

 let agua_caso_dos = agua_necesaria(20);
 console.log(`Para recorrer 20km , el ciclista necesitaria ${agua_caso_dos} litros de agua`);
