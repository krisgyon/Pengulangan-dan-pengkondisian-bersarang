for ( var x = 0; x < 10; x++ ) {
    var y = '';
    var b = '';
    if( x%2 != 0 ) {
        
        for ( var i = 0 ; i < (9 - x) /2 ; i++ ) {
            y = y + ' ';
        }
        for ( var j = 0 ; j < x ; j++ ) {
            b = b + '*';
        }
        console.log(y + b);    
    }
}