var BannedBooks = angular.module('BannedBooks', [
'ngRoute',
'ngMessages',
'Controllers',
'BannedBooksSrv',
'bannedBooksNav'
]);

BannedBooks.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'views/start.html',
    controller: 'HomeCtrl'
  }).
  when('/category/:LocationType', {
    templateUrl: 'views/category.html',
    controller: 'CategoryCtrl'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
