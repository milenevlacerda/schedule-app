angular
    .module( 'schedule', [
        'diretivas',
        'ngRoute',
        'services',
        'angular-flatpickr'
    ])
.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ) {

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
}]);
