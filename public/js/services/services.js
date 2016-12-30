/* jshint esversion:6 */

angular.module( 'services', [ 'ngResource' ] )
.factory( 'recursoCompromisso', function( $resource ) {
    return $resource( 'compromises/schedule/:compromiseId', null, {
        'update': {
            method: 'PUT'
        }
    });

})
.factory( 'createCompromise', function( recursoCompromisso, $q, $rootScope ) {

    var servico = {};
    var evento = 'compromissoCadastrado';

    servico.create = function( compromise, $scope ) {
        return $q( function( resolve, reject ) {

            var tempDate = compromise.formattedDate.split('/');
            compromise.dateTime = new Date(`${ tempDate[ 1 ]}/${ tempDate[ 0 ]}/${ tempDate[ 2 ]}`);

            if( compromise._id ) {

                recursoCompromisso.update( { compromiseId: compromise._id }, compromise, function() {

                    $rootScope.$broadcast( evento );

                    resolve({
                        mensagem: ` Compromisso '${ compromise.titulo }' atualizado com sucesso`,
                        inclusao: false
                    });

                }, function( erro ){
                    console.log( erro );
                    reject({
                        mensagem: `Não foi possível atualizar o compromisso '${ compromise.titulo }' `
                    });
                });
            } else {

                recursoCompromisso.save( compromise, function() {

                    $rootScope.$broadcast( evento );

                    resolve({
                        mensagem: `Compromisso ${ compromise.titulo } foi incluido com sucesso!`,
                        inclusao: false
                    });

                }, function( erro ) {
                    console.log( erro );
                    reject({
                        mensagem: `Não foi possível incluir o compromisso '${ compromise.titulo }'`
                    });
                });
            }
        });
    };

    return servico;
});
