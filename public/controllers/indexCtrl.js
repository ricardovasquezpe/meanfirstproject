app.controller('indexCtrl', ['$scope', '$http', function($scope, $http, $location) {
	var refreshListContact = function(){
		$http.get('/contactlist').then(
			function successCallback(response){
		    	$scope.contactList = response.data;
				$scope.contact = null;
			}, function errorCallback(error){
		    	console.log("error: "+error);
		});
	};
	refreshListContact();

	$scope.addContact = function(){
		$http.post('/addcontact', $scope.contact).then(
			function successCallback(response){
		    	refreshListContact();
			}, function errorCallback(error){
		    	console.log("error: "+error);
		});
	};

	$scope.removeContact = function(id){
		$http.delete('/removecontact/'+ id ).then(
			function successCallback(response){
		    	refreshListContact();
			}, function errorCallback(error){
		    	console.log("error: "+error);
		});
	}

	$scope.selectContact = function(id){
		$http.get('/getcontactbyid/' + id).then(
			function successCallback(response){
		    	$scope.contact = response.data;
			}, function errorCallback(error){
		    	console.log("error: "+error);
		});
	}

	$scope.updateContact = function(){
		$http.put('/updatecontact/' , $scope.contact).then(
			function successCallback(response){
		    	refreshListContact();
		    	$scope.contact = null;
			}, function errorCallback(error){
		    	console.log("error: "+error);
		});
	}

	$scope.redir = function(){
		$location.path("/home" );
	}
}]);﻿