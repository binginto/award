const app = angular.module('wechatApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'shareController',
			templateUrl: 'tpl/main.html'
		})
		.when('/show/showData', {
			controller: 'shareController',
			templateUrl: 'tpl/showData.html',

		})
		.when('/show/action', {
			controller: 'shareController',
			templateUrl: 'tpl/action.html',

		})
		.otherwise({
			redirectTo: '/'
		});

});