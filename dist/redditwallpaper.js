var request = require( 'request' );
request( 'https://www.reddit.com/r/MinimalWallpaper/top/.json', function( error, response, body ) {
    if ( !error && response.statusCode == 200 ) {
        return response.statusCode; // just return 200 for test
    }
} );
