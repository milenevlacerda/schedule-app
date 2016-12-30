var api = require( '../api' ),
    path = require( 'path' );


/* Rotas */
module.exports  = function( app ) {

    /* Rota api criação e listagem */
    app.route( '/compromises/schedule' )
        .post( api.create )
        .get( api.list );

    /* Rota api de ações */
    app.route( '/compromises/schedule/:compromiseId' )
        .delete( api.remove )
        .get( api.find )
        .put( api.edit );

    // Habilitando HTML5MODE
    app.all('/*', function( req, res ) {
        res.sendFile( path.resolve( 'public/index.html' ) );
    });

};
