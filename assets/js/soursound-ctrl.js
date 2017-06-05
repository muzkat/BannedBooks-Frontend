/**
* Created by Erik Woitschig on 3/9/15.
* http://www.sourcloud.com
*/

(function () {

  var Controllers = angular.module('Controllers', []);

  Controllers.controller('HomeCtrl', ['$scope', '$routeParams', 'BannedBooksSrv', '$location',
    function ($scope, $routeParams, BannedBooksSrv, $location) {

    }]);

  Controllers.controller('CategoryCtrl', ['$scope', '$routeParams', 'BannedBooksSrv', '$location',
    function ($scope, $routeParams, BannedBooksSrv, $location) {

      // init

      $scope.limit = 100;
      $scope.offset = 0;

      BannedBooksSrv.getBooks($scope.offset, $scope.limit)
        .then(
        function (response) {
          if (response.items && response.items.length > 0) {
            $scope.books = response.items;
            console.log(response);
          }
          $scope.total = response.itemCount;
        }
        );

      $scope.next = function () {
         console.log('click');
        $scope.offset = $scope.offset + $scope.limit;

        BannedBooksSrv.getBooks($scope.offset, $scope.limit)
          .then(
          function (response) {
            if (response.items && response.items.length > 0) {
              $scope.books = response.items;
              console.log(response);
            }
            $scope.total = response.itemCount;
          }
          );

      }

       $scope.getBook = function(id) {
         console.log('click' + id);
       

        BannedBooksSrv.getBook(id)
          .then(
          function (response) {
            if (response.items && response.items.length > 0) {
              $scope.books = response.items;
              console.log(response);
            }
            $scope.total = response.itemCount;
          }
          );

      }

    }

  ]);

})();
