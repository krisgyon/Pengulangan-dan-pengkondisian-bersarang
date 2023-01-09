var y = '' ;

for( var x = 0 ; x < 6 ; x++ ) {
    for( var z = 0 ; z <= x ; z++ )
    y += '*' ;
    y += '\n' ;
}
for( var x = 5 ; x > 0 ; x-- ) {
    for( var z = 0 ; z < x ; z++ )
    y += '*' ;
    y += '\n' ;
}
console.log ( y ) ;