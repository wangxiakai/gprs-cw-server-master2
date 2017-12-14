var myApp = angular.module('myApp');

myApp.controller('tempController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('tempController loaded...');

	$scope.getTemps = function(){
		$http.get('/api/temp').then(function(responce){
			$scope.temps = responce.data;
		});
	}

	$scope.getTempatDate = function(){
		var date = $routeParams.date;
		console.log(date);
		$http.get('/api/temp/' + date).then(function(responce){
			$scope.temps = responce.data;
		});
	}

}]);