var BannedBooks = angular.module('BannedBooks', [
'ngRoute',
'ngMessages',
'Controllers',
'BannedBooksSrv'
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
    when('/book/:bookId', {
    templateUrl: 'views/singleBook.html',
    controller: 'BookCtrl'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);

BannedBooks.directive('bannedBooksNav', function() {
  return {    
    templateUrl: 'directives/bannedbooks-nav.html'
  };
});

BannedBooks.directive('footer', function() {
  return {    
    templateUrl: 'directives/footer.html'
  };
}); 

BannedBooks.directive('header', function() {
  return {    
    templateUrl: 'directives/header.html'
  };
}); 
