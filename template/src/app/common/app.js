/**
 * define app module
 * @Author: zhangxuelian 
 * @Date: 2017-09-13 11:11:28 
 * @Last Modified by: chenpeiyu
 * @Last Modified time: 2019-03-20 16:45:15
 **/
define([
	'app/router/router'
	], function () {
  	var app = angular.module('app', [ 
		'home',
		// "services",
		"ui.bootstrap",
		// "directives",
		"gxCommon"
	]);

	app.config(['$stateProvider',
		'$urlRouterProvider',
		'$locationProvider',
		'angularShiroConfigProvider', 
		'$couchPotatoProvider',
		function ($stateProvider, $urlRouterProvider, $locationProvider, angularShiroConfigProvider,$couchPotatoProvider) {
			$urlRouterProvider.otherwise("home");
			$stateProvider.state('home', {
				url: "/home",
				templateUrl: 'app/demo/home.html',
			})
		}]);

    return app;
});
