(function () {

var bannedBooksNav = angular.module('bannedBooksNav', []);

bannedBooksNav.directive('bannedBooksNav', function() {
  return {    
    templateUrl: 'directives/bannedbooks-nav.html'
  };
});

bannedBooksNav.directive('footer', function() {
  return {    
    templateUrl: 'directives/footer.html'
  };
}); 

})();