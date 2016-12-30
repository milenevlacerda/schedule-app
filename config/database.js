var Datastore = require( 'nedb' ),
    dbName = 'schedule.db',
    db;

/* Criando banco */

if( !db ) {
    db = new Datastore({
        filename: dbName,
        autoload: true
    });
    console.log( `Banco ${ dbName } pronto para uso` );
}

module.exports = db;
