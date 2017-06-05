(function(){

  var BannedBooksSrv = angular.module('BannedBooksSrv', []);

  BannedBooksSrv.service("BannedBooksSrv",
  function( $http, $q) {

    var baseUrl = 'http://bannedbooks.sourcloud.com/';   
    
    return({
            getBooks                      : getBooks,
            getBook                       : getBook
    });


function getBooks(offset, limit) {

  var endpoint = 'bannedBooks';

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + endpoint,
    params: {offset: offset, limit: limit}
  });

  return( request.then( handleSuccess, handleError ) );

}

function getBook(id) {

  var endpoint = 'bannedBooks';

  var request = $http({
    method: "get",
    cache: true,
    url: baseUrl + endpoint + '/' + id
  });

  return( request.then( handleSuccess, handleError ) );

}

function handleError( response ) {

  // The API response from the server should be returned in a
  // nomralized format. However, if the request was not handled by the
  // server (or what not handles properly - ex. server error), then we
  // may have to normalize it on our end, as best we can.
  if (
    ! angular.isObject( response.data ) ||
    ! response.data.message
  ) {

    return( $q.reject( "An unknown error occurred." ) );

  }

  // Otherwise, use expected error message.
  return( $q.reject( response.data.message ) );

}

function handleSuccess( response ) {

  return( response.data );

}

}
);


})();
