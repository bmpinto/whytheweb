window.app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', { templateUrl: 'views/init.html', controller: 'InitCtrl' })
	.when('/css', { templateUrl: 'views/css.html', controller: 'CSSCtrl' })
	.when('/angular', { templateUrl: 'views/angularindex.html' })
	.when('/angular/examples/1', { templateUrl: 'views/ngexample1.html', controller: 'AngularCtrl' })
	.when('/angular/examples/2', { templateUrl: 'views/ngexample2.html', controller: 'AngularCtrl' })
	.when('/end', { templateUrl: 'views/thanks.html' })
	.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(false);
	$locationProvider.hashPrefix('!');
}]);