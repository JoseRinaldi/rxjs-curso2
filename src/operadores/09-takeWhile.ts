import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';



const click$ = fromEvent<MouseEvent>( document, 'click' );


click$.pipe(
    map( ({ x, y }) => ({x,y}) ),
    // takeWhile( ({ y })=> y <= 150 )
    
    // el true al final es una propiedad condicional para que muestre o no el ultimo valor (el que detuvo la ejecucion ) por defecto es false
    takeWhile( ({ y })=> y <= 150, true )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
});







