angular.module( 'minhasDiretivas', [] )
.directive( 'meuPainel', function() {

    var ddo = {};

    ddo.restrict = "AE"; // attribute - element

    ddo.scope = {
        titulo: '@',
        descricao: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';


    return ddo;

})
.directive( 'meuBotaoPerigo', function() {

    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        acao: '&'
    };

    ddo.template = '<button name="button" class="remove" ng-click="acao( compromise )"><i class="fa fa-trash" aria-hidden="true"></i></button>';

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

});
