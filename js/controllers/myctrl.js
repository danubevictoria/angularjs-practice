app.controller('myCtrl', function($scope) {
	$scope.data = {
		expression: "This is an expression",
		number1: null,
		number2: null
	};

	$scope.fwends = [
		{
			firstname: 'Danube',
			lastname: 'Phan'
		},
		{
			firstname: 'Ravi',
			lastname: 'Dontharaju'
		}
	]
})