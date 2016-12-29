/* jshint esversion:6 */

angular.module( 'schedule' ).controller( 'CompromiseController',
    [ $scope, createCompromise, recursoCompromisso, $routeParams ,
    function( $scope, createCompromise, recursoCompromisso, $routeParams ) {

    $scope.compromise = {};
    $scope.mensagem = '';

    if( $routeParams.compromiseId ) {
        recursoCompromisso.get({ compromiseId: $routeParams.compromiseId }, function( compromise ) {
            // compromise.dateTime = new Date( compromise.dateTime );
            compromise.dateTime = moment();
            $scope.compromise = compromise;
        }, function( erro ) {
            console.log( erro );
            $scope.mensagem = 'Não foi possível obter o compromisso';
        });
    }

    $scope.submeter = function() {
        if( $scope.formulario.$valid ) {
            createCompromise.create( $scope.compromise )
            .then( function( dados ) {
                $scope.mensagem = dados.mensagem;

                if( dados.inclusao ) {
                    $scope.compromise = {};
                }
            })
            .catch( function( erro ) {
                $scope.mensagem = erro.mensagem;
            });
        }
    };

}]);
