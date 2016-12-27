angular.module( 'minhasDiretivas', [] )
.directive( 'meuPainel', function() {

    var ddo = {};

    ddo.restrict = "AE"; // attribute - element

    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';


    return ddo;

})
.directive( 'meuCompromisso', function() {

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;

})
.directive( 'meuBotaoPerigo', function() {

    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        acao: '&'
    };

    ddo.template = '<button type="button" name="button" class="btn btn-danger btn-block" ng-click="acao( foto )">{{ nome }}</button>';

    return ddo;

})
.directive( 'meuFocus', function() {

    var ddo = {};

    ddo.restrict = "A";

    ddo.link = function( scope, element ) {
        scope.$on( 'compromissoCadastrado', function(){
            element[0].focus();
        });
    };

    return ddo;

})
.directive('meusTitulos', function() {

    var ddo = {};

    ddo.restrict = 'E';

    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';

    ddo.controller = function( $scope, recursoCompromisso ) {
        recursoCompromisso.query( function( compromises ) {
            $scope.titulos = compromises.map( function( compromise ) {
                return compromise.titulo;
            });
        });
    };

    return ddo;
});
