(function(){
var app=angular.module('navigationapp',['navigationappfactory']);
app.controller('parentController',function($scope,navigationappFactory){
	 alert('controller initializing');
	 navigationappFactory.getListIteams();
});

// parentcontroller.$inject=['navigationservices'];

// function parentcontroller($scope,navigationservices)
// {
	// var restresource={
		// Title:"navigationlist",
		// select:"Title",
		// extend:"",
		// filter:"",
		// orderby:""

	// };
	 // $scope.itemdata=[];
	// var datam=[];
     	// navigationservices.getListIteams(restresource).success(function(){
			// $scope.itemdata=response.data;
		// });
		// for(i=0;i<$scope.itemdata.lenght;i++)
		// {
			// datam=$scope.itemdata.Title;
		// }
		// return datam;


// }



})();
