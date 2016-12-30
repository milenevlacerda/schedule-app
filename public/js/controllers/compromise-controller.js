
angular.module( 'schedule' ).controller( 'CompromiseController',
    [ '$scope', 'createCompromise', 'recursoCompromisso', '$routeParams' ,
    function( $scope, createCompromise, recursoCompromisso, $routeParams ) {

    $scope.compromise = {};
    $scope.mensagem = '';

    $scope.dateOpts = {
        dateFormat: 'd/m/Y H:i',
        locale: "pt",
        enableTime: true
    };

    if( $routeParams.compromiseId ) {
        recursoCompromisso.get({ compromiseId: $routeParams.compromiseId }, function( compromise ) {

            $scope.compromise = compromise;

        }, function( erro ) {
            console.log( erro );
            $scope.mensagem = 'Não foi possível obter o compromisso';
        });
    }

    $scope.submeter = function() {
        if( $scope.formulario.$valid ) {
            createCompromise
                .create( $scope.compromise, $scope )
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
