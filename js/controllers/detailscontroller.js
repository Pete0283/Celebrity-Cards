angular.module('Routing')

.controller('DetailsCtrl', function($scope, $routeParams, Items){
    $scope.itemId = $routeParams.itemId;
    $scope.item = {};

        Items.getOne($scope.itemId)
            .then(function(response){
                //success
                var items = response.data.items;
                items.forEach(function( i ){
                    if (i.id == $routeParams.itemId){
                        $scope.item = i;
                    }
                });

            }, function(response) {
                //error
            });
});