angular.module('familyTree', ['ngRoute', 'familyTree.controllers'])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/familyTree.html',
      controller: 'treeController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
