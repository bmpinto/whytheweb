window.app.controller('AngularCtrl', function($scope, angularFire){
    document.body.style.backgroundColor = '#e74c3c';

    var ref = new Firebase('https://bmpinto.firebaseio.com/');
    $scope.messages = [];
    
    angularFire(ref, $scope, "messages");

    $scope.addMessage = function(e){
		if (e.keyCode != 13) return;
		
		if( $scope.msg !== "" ) {
      		$scope.messages.push({ body: $scope.msg });
    		$scope.msg = "";
    	}
    }
});