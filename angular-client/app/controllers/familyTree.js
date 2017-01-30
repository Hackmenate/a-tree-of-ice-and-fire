angular.module('familyTree.controllers', [])
.controller('treeController', function($scope, $http) {

// This is dummy data to get you started on building the top ten view.
// Delete this after you're able to serve actual data from your server.
  $scope.tree = {
    name: 'Ned',
    parent: '',
    children: [
      {
        name: 'Fred',
        parent: 'Ned',
        children:[
          {
            name: 'Alice',
            parent: 'Tom',
            children: [
              {
                name: 'Bob',
                parent: 'Alice',
                children: []
              }
            ]
          }
        ]
      },
      {
        name: 'Tom',
        parent: 'Ned',
        children: []
      }
    ]
  };

  $scope.characterName = " ";

  $scope.buildTree = function(e) {
    // TODO: Build an object using data from your server, that mimics the stucture of example data


  };

});
