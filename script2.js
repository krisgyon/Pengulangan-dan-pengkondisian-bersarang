var y = '' ;
// for( var x = 5 ; x > 0 ; x--) {
//     for( var z = 0 ; z < x ; z ++ ) {
//         y += '*' ;
//     }
//     y += '\n' ;
// }
// console.log ( y ) ;
for( var x = 0 ; x < 1 ; x++) {
    y += '    *' ;
}
y += '\n   ' ;
for( var x = 0 ; x < 2 ; x++) {
    y += '*' ;
}
y += '\n  ' ;
for( var x = 0 ; x < 3 ; x++) {
    y += '*' ;
}
y += '\n ' ;
for( var x = 0 ; x < 4 ; x++) {
    y += '*' ;
}
y += '\n' ;

    for( var x = 0 ; x < 5 ; x++) {
        y += '*' ;
    } 
    y += '\n ' ;
        for( var x = 4 ; x > 0 ; x--) {
            y += '*' ;
        }
        y += '\n  ' ;
            for( var x = 3 ; x > 0 ; x--) {
                y += '*' ;
            }
            y += '\n   ' ;
                for( var x = 2 ; x > 0 ; x--) {
                    y += '*' ;
                }
                y += '\n    ' ;
                    for( var x = 1 ; x > 0 ; x--) {
                        y += '*' ;
                    }
                    y += '\n' ;
console.log( y ) ;
