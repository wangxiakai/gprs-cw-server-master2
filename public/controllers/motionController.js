var myApp = angular.module('myApp');

myApp.controller('motionController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('motionController loaded...');

	$scope.getMotion = function(){
		$http.get('/api/motion').then(function(responce){
			$scope.motions = responce.data;
		});
	}
}]);