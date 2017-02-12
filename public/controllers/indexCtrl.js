app.controller('indexCtrl', ['$scope', '$http', 'indexMdl', function($scope, $http, indexMdl) {
	var refreshListContact = function(){
		indexMdl.getAllContactList().then(function(data) {
	        $scope.contactList = data;
	        $scope.contact = null;
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
}]);﻿