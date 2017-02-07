app.controller('loginCtrl', ['$scope', '$http', function($scope, $http, $location) {
	$scope.user = null;
	$scope.login = function(){
		window.location.assign("/index.html");
	}
}]);﻿