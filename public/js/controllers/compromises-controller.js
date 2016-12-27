/* jshint esversion:6 */

angular.module( 'schedule' ).controller( 'CompromisesController', function( $scope, recursoCompromisso ) {

    $scope.compromises = [];
    $scope.mensagem = '';


    recursoCompromisso.query( function( compromises ) {
        $scope.compromises = compromises;
    }, function( erro ) {
        console.log( erro );
    });

    $scope.remover = function( compromise ) {
        recursoCompromisso.delete( { compromiseId: compromise._id }, function() {

            var compromiseIndex = $scope.compromises.indexOf( compromise );
            $scope.compromises.splice( compromiseIndex, 1 );
            $scope.mensagem = `Compromisso ' ${ compromise.titulo }' removido com sucesso!`;

        }, function( erro ) {
            console.log( erro );
            $scope.mensagem = `Não foi possível apagar o compromisso ' ${ compromise.titulo }' `;
        });
    };
});
