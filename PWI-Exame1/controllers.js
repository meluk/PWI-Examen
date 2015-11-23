var controllers = angular.module("ChatUp.controllers", []);

controllers.controller('ChatController', function($scope, $Messages){
	$scope.messages = $Messages.all;
	$scope.messageToSend = {};
	$scope.messageToSend.text = '';
      $scope.promotions = [
     	{name: 'Coca Cola', price:'$3'},
     	{name: '7up', price:'$4'},
     	{name: 'Pepsi', price:'$3'}
     ];
	

	$scope.sendMessage = function() {
		$Messages.send($scope.messageToSend);
		$scope.messageToSend.text = '';
	};

	$scope.removeMessage = function(message) {
		$Messages.remove(message);
	};
});

