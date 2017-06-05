(function () {

  var Controllers = angular.module('Controllers', []);

  Controllers.controller('HomeCtrl', ['$scope', '$routeParams', 'BannedBooksSrv', '$location',
    function ($scope, $routeParams, BannedBooksSrv, $location) {

    }]);

  Controllers.controller('CategoryCtrl', ['$scope', '$routeParams', 'BannedBooksSrv', '$location',
    function ($scope, $routeParams, BannedBooksSrv, $location) {

      $scope.limit = 100;
      $scope.offset = 0;

      BannedBooksSrv.getBooks($scope.offset, $scope.limit)
        .then(
        function (response) {
          if (response.items && response.items.length > 0) {
            $scope.books = response.items;            
          }
          $scope.total = response.itemCount;
        }
        );

      $scope.next = function () {      
        $scope.offset = $scope.offset + $scope.limit;

        BannedBooksSrv.getBooks($scope.offset, $scope.limit)
          .then(
          function (response) {
            if (response.items && response.items.length > 0) {
              $scope.books = response.items;              
            }
            $scope.total = response.itemCount;
          }
          );

      }

      $scope.getBook = function (id) {
        BannedBooksSrv.getBook(id)
          .then(
          function (response) {
            if (response.items && response.items.length > 0) {
              $scope.books = response.items;            
            }
            $scope.total = response.itemCount;
          }
          );
      }

      $scope.changeState = function (id) {
          $location.path('/book/' + id); // path not hash
      };

    }

  ]);

  Controllers.controller('BookCtrl', ['$scope', '$routeParams', 'BannedBooksSrv', '$location',
    function ($scope, $routeParams, BannedBooksSrv, $location) {

      var bookId = $routeParams.bookId;
      console.log(bookId);

      BannedBooksSrv.getBook(bookId)
        .then(
        function (response) {
          console.log(response);
          if (response.items && response.items.length > 0 && response.items.length ===1) {
            $scope.book = response.items[0];
          }
          $scope.total = response.itemCount;
        }
        );

    }

  ]);

})();
