import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, map } from 'rxjs/operators';


const click$ = fromEvent( document, 'click' );

click$.pipe(
    debounceTime(3000)
);//.subscribe( console.log );

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );


const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    debounceTime(1000),
    //pluck('target','value'),
    map( event => event?.code ),
    distinctUntilChanged()
).subscribe( console.log );






