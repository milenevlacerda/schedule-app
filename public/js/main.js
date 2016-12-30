/* Templates e Rotas */

angular.module( 'schedule', [ 'diretivas', 'ngRoute', 'services', 'angular-flatpickr' ])
.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {

    $locationProvider.html5Mode( true );

    /* Página inicial */
    $routeProvider.when( '/schedule',{
        templateUrl: 'partials/principal.html',
        controller: 'CompromisesController'
    });

    /* Criação de novo compromisso */
    $routeProvider.when( '/schedule/new',{
        templateUrl: 'partials/compromise.html',
        controller: 'CompromiseController'
    });

    /* Edição de compromisso */
    $routeProvider.when( '/schedule/edit/:compromiseId',{
        templateUrl: 'partials/compromise.html',
        controller: 'CompromiseController'
    });

    $routeProvider.otherwise( { redirectTo: '/schedule' } );
}]);
