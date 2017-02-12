app.service('indexMdl', ['$http', function($http) {
    this.getAllContactList = function(){
        var list = $http.get('/contactlist').then(
            function successCallback(response){
                return response.data;
            }, function errorCallback(error){
                console.log("error: "+error);
        });

        return list;
    }
}]);﻿