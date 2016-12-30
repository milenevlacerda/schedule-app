angular.module( 'diretivas', [] )
.directive( 'listCompromises', function() {

    /* Listagem de compromissos - diretiva */

    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        titulo: '@',
        descricao: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/list-compromises.html';


    return ddo;

})
.directive( 'delete', function() {

    /* Botão delete de cada compromisso */

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

    /* Focus no botão voltar a cada compromisso cadastrado ou enviado */

    var ddo = {};

    ddo.restrict = "A";

    ddo.link = function( scope, element ) {
        scope.$on( 'compromissoCadastrado', function(){
            element[0].focus();
        });
    };

    return ddo;

});
