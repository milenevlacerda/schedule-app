/* Controller de compromissos */

angular.module( 'schedule' ).controller( 'CompromisesController', [ '$scope', 'recursoCompromisso',
    function( $scope, recursoCompromisso ) {

    $scope.compromises = [];
    $scope.mensagem = '';

    /* Ordenando compromissos por data mais próxima */

    recursoCompromisso.query( function( compromises ) {
        $scope.compromises = compromises.slice().sort( function( a, b ){
            return new Date( a.dateTime )  <  new Date( b.dateTime ) ? -1 : 1;
        });
    }, function( erro ) {
        console.log( erro );
    });

    /* Chamada da remoção de compromisso */

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
}]);
