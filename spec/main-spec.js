var request = require( 'request' );

describe( 'that we can connect to reddit', function() {

    it( "should connect to reddit top minimal wallpapers", function( done ) {
        request( "https://www.reddit.com/r/MinimalWallpaper/top/.json", function( error, response ) {
            expect( response.statusCode ).toEqual( 200 );
            done();
        } );
    } );
} );