window.bootstrap = function () {
	angular.bootstrap(document, ['BmpApp']);
}

window.init = function () {
    window.bootstrap();
    window.init();
}

var app = angular.module('BmpApp', ['firebase']);