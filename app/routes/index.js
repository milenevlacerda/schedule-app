var api = require( '../api' ),
    path = require( 'path' );

module.exports  = function( app ) {

    app.route( '/v1/schedule' )
        .post( api.create )
        .get( api.list );

    app.route( '/v1/schedule/:compromiseId' )
        .delete( api.remove )
        .get( api.find )
        .put( api.edit );

    // habilitando HTML5MODE
    app.all('/*', function( req, res ) {
        res.sendFile( path.resolve( 'public/index.html' ) );
    });
};
