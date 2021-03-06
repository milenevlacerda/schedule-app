var db = require( '../../config/database' );
var api = {};

/* Cria novo compromisso */

api.create = function( req, res ) {
    db.insert( req.body, function( err, newDoc ) {
        if( err ) {
            return console.log( err );
        }
        console.log( `Adicionado com sucesso: ${ newDoc._id }`);
        res.json( newDoc._id );
    });
};

/* Edita compromisso */

api.edit = function( req, res ) {

    db.update( { _id : req.params.compromiseId }, req.body, function( err, numReplaced ) {
        if ( err ) {
            return console.log( err );
        }

        if( numReplaced ) {
            res.status( 200 ).end();
        }

        res.status( 500 ).end();
        console.log( `Atualizado com sucesso: ${ req.body._id }`);
        res.status( 200 ).end();
    });
};

/* Lista compromissos */

api.list = function( req, res ) {
    db.find( {} ).sort( { titulo: 1 } ).exec( function( err, doc ) {
        if( err ) {
            return console.log( err );
        }

        res.json( doc );
    });
};

/* Busca determinado compromisso */

api.find = function(req, res) {
   db.findOne({ _id: req.params.compromiseId }, function( err, doc ) {
        if( err ) {
            return console.log( err );
        }

        res.json( doc );
    });
};

/* Deleta compromisso*/

api.remove = function( req, res ) {

    db.remove( { _id: req.params.compromiseId }, {}, function ( err, numRemoved ) {
        if( err ) {
            return console.log( err );
        }
        console.log( 'Removido com sucesso' );
        if( numRemoved ) {
            res.status( 200 ).end();
        }
        res.status( 500 ).end();
    });
};

module.exports = api;
