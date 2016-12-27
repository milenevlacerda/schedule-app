angular.module( 'schedule', [ 'minhasDiretivas', 'ngRoute', 'meusServicos' ] )
.config( function( $routeProvider, $locationProvider ) {

    $locationProvider.html5Mode( true );

    $routeProvider.when( '/schedule',{
        templateUrl: 'partials/principal.html',
        controller: 'CompromisesController'
    });

    $routeProvider.when( '/schedule/new',{
        templateUrl: 'partials/compromise.html',
        controller: 'CompromiseController'
    });

    $routeProvider.when( '/schedule/edit/:compromiseId',{
        templateUrl: 'partials/compromise.html',
        controller: 'CompromiseController'
    });

    $routeProvider.otherwise( { redirectTo: '/schedule' } );
});
