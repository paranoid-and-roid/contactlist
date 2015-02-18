app.controller("AppCtrl", ["$scope", "$http", function($scope, $http){
	console.log("Hello from the controller");
	
var refresh = function() {
	$http.get('/contactlist').success(function(response) {
		console.log("I received the data I requested");
		$scope.contactlist= response;
		$scope.contact = "";
	});
};

refresh();
	
	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response) {
			console.log(response);
			refresh();
		});
	};

}]);
