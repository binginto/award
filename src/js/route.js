const app = angular.module('wechatApp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'shareController',
			templateUrl: 'tpl/treeView.html'
		})
		.when('/show/awardTable', {
			controller: 'shareController',
			templateUrl: 'tpl/awardTable.html',

		})
		.when('/show/action', {
			controller: 'shareController',
			templateUrl: 'tpl/action.html',

		})
		.otherwise({
			redirectTo: '/'
		});

});