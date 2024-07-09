import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged, map } from 'rxjs/operators';


const click$ = fromEvent( document, 'click' );

click$.pipe(
    throttleTime(3000)
)//.subscribe( console.log );

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );


const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    //pluck('target','value'),
    map( event => event?.code ),
    distinctUntilChanged()
).subscribe( console.log );










