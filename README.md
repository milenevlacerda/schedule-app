# Alura Angular I


### Aula 02
--------------------------------------------------

* O papel do modelo MVC
* O objeto global angular
* Importação do Angular e criação do módulo principal da aplicação
* As diretivas ng-app e ng-controller
* Angular Expression (AE)
* O conceito de template
* Criação de um controller
* O conceito de data binding

### Aula 03
--------------------------------------------------

* A diretiva ng-repeat
* Injeção de dependências baseada no nome de parâmetro
* O serviço $http
* O conceito de promise
* Comunicação com o back-end


### Aula 04
-------------------------------------------------

* Diretivas são componentes reutilizáveis
* Criar nossas própria diretivas
* Diretivas reutilizáveis devem possuir escopo isolado
* Mecanismo de transclusão


### Aula 05
-------------------------------------------------
* A diretiva ng-model e two-way data binding
* Aplicação de filtro na diretiva ng-repeat
* ng-model-options e postergação do two-way data binding
* Animações com o módulo ngAnimate
* Animações requerem conhecimento sólido de CSS3


### Aula 06
-------------------------------------------------

* Criação de parciais
* A diretiva ng-view
* O módulo ngRoute
* $routeProvider e configurações de rota
* Rota padrão
* Hash
* $LocationProvider e html5Mode


### Aula 07
-------------------------------------------------

* Navegação entre views
* A diretiva ng-submit e a interface de eventos do Angular
* Executar uma ação no controller através de ações do usuário
* Validação de formulário com Angular
* Envio de dados para o servidor com $http.post
* Mensagens de aviso para o usuário


### Aula 08
--------------------------------------------------
* A diretiva ng-click
* Deleção de recurso com $http.delete
* O truque com a função splice para evitar uma nova requisição
* Rotas do Angular com curingas (parametrizadas)
* $routeParams e acesso a parâmetros
* Alteração de recurso com $http.put
* Único formulário para inclusão e alteração


### Aula 09
--------------------------------------------------
* Criar uma combobox com Angular
* O papel da diretiva ng-options
* Transformação com filtros (ex. uppercase)
* A diferença entre @ e & em diretivas


### Aula 10
--------------------------------------------------
* O problema de URL's espalhadas
* $resource para consumir endpoints REST
* Criar nossa própria função em $resource
* Criar nosso próprio serviço


### Aula 11
--------------------------------------------------
* Organizar lógicas reutilizáveis em serviços
* Criar serviços que retornam promises


### Aula 12
--------------------------------------------------
* Manipulação de DOM em diretivas
* Observar mudanças em propriedades através de $watchers
* O modificador =
* Barramento de eventos do Angular


### Driblando a minificação
---------------------------------------------------
O processo de minificação altera o nome dos parâmetros das funções. Não há problema algum nisso, contanto que o novo nome seja trocado em todos os lugares em que é usado, porém o sistema de injeção de dependências do Angular é baseado no nome dos parâmetros. A conclusão disso é que nada mais funcionará no Angular após a minificação, já que os parâmetros das funções serão trocados por outros nomes aleatórios e menores que não tem nada a ver.

Para isso usamos o
> annotation system

Ele permite dizer o que deve ser injetado para cada parâmetro do controller, mesmo que seu nome seja trocado. Ex:


Este controller:

```
angular.module('alurapic')
    .controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {
            // código omitido
});
```

Vira:

```
angular.module('alurapic')
    .controller('FotoController', ['$scope', 'recursoFoto', '$routeParams', 'cadastroDeFotos', function($scope, recursoFoto, $routeParams, cadastroDeFotos) {
            // código omitido
    }]);
```
