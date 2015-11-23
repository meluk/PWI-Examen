
var factories = angular.module("ChatUp.factories", ['firebase']);

factories.factory('$Messages', function($firebaseArray){
	var ref = new Firebase('http://chat506.firebaseio.com/messages');
	var messages =  $firebaseArray(ref);

	return {
		all: messages,
		send: function(message) {
			return messages.$add(message);
			//messages.push(message);
		},
		remove: function(message){
			return messages.$remove(message);
		}
	}
});